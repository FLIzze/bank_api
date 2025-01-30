import { Test, TestingModule } from '@nestjs/testing';
import { AdvisorsService } from './advisors.service';
import { Model } from 'mongoose';
import { Advisors } from './interfaces/advisors.interface';
import { ClientsService } from '../clients/clients.service';

describe('AdvisorsService', () => {
    let service: AdvisorsService;
    let model: Model<Advisors>;

    const mockAdvisor: Advisors = {
        name: "1",
        email: "mail@gmail.com",
        phone: "0620853890",
        managedClients: ["6750caa88f05311c5b33c3f4"],
        region: "France",
    };

    const mockAdvisorModel = {
        create: jest.fn().mockResolvedValue(mockAdvisor),
        find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockAdvisor]) }),
        findById: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockAdvisor) }),
        findOneAndUpdate: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockAdvisor) }),
        findOneAndDelete: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockAdvisor) }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AdvisorsService,
                {
                    provide: 'ADVISORS_MODEL',
                    useValue: mockAdvisorModel,
                },
                {
                    provide: ClientsService,
                    useValue: {
                        findOne: jest.fn().mockResolvedValue({
                            _id: '6750caa88f05311c5b33c3f4',
                            phone: '0620853890',
                            mail: 'test@mail.com',
                            passcode: 'Password123',
                            birthdate: new Date('2004-02-09T00:00:00Z'),
                            address: '23 Rue Toulouse Lautrec',
                            zipcode: 33530,
                            country: 'France',
                            amount: 0
                        }),
                    },
                },
            ],
        }).compile();

        service = module.get<AdvisorsService>(AdvisorsService);
        model = module.get<Model<Advisors>>('ADVISORS_MODEL');
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});