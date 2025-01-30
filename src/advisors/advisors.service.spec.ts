import { Test, TestingModule } from '@nestjs/testing';
import { AdvisorsService } from './advisors.service';
import { Model } from 'mongoose';
import { Advisors } from './interfaces/advisors.interface';
import { ClientsService } from '../clients/clients.service';

describe('AdvisorsService', () => {
    let service: AdvisorsService;
    let model: Model<Advisors>;
    let clientService:ClientsService

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
        findOne: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockAdvisor) }), 
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

        clientService = module.get<ClientsService>(ClientsService);
        service = module.get<AdvisorsService>(AdvisorsService);
        model = module.get<Model<Advisors>>('ADVISORS_MODEL');
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create an advisor', async () => {
        const createAdvisorDto = {
            name: "1",
            email: "mail@gmail.com",
            phone: "0620853890",
            managedClients: ["6750caa88f05311c5b33c3f4"],
            region: "France",
        };

        const result = await service.create(createAdvisorDto);

        expect(result).toEqual(mockAdvisor);
        expect(model.create).toHaveBeenCalledWith(createAdvisorDto);
    });

    it('should return all advisors', async () => {
        const result = await service.findAll();

        expect(result).toEqual([mockAdvisor]);
        expect(model.find).toHaveBeenCalled();
    });

    it('should return one advisor by ID', async () => {
        const advisorId = '507f191e810c19729de860ea';

        const result = await service.findOne(advisorId);

        expect(result).toEqual(mockAdvisor);
        expect(model.findById).toHaveBeenCalledWith(advisorId);
    });

    it('should update an advisor', async () => {
        const advisorId = '507f191e810c19729de860ea';
        const updateAdvisorDto = {
            name: "Updated Advisor",
            email: "updated_email@gmail.com",
            phone: "0611223344",
            managedClients: ["1234567890"],
            region: "Spain",
        };

        const updatedAdvisor = { _id: advisorId, ...updateAdvisorDto };

        (mockAdvisorModel.findOneAndUpdate as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(updatedAdvisor),
        });

        const result = await service.update(advisorId, updateAdvisorDto);

        expect(result).toEqual(updatedAdvisor);
        expect(model.findOneAndUpdate).toHaveBeenCalledWith(
            { _id: advisorId },
            updateAdvisorDto,
            { new: true }
        );
    });

    it('should delete an advisor', async () => {
        const advisorId = '507f191e810c19729de860ea';

        const result = await service.delete(advisorId);

        expect(result).toEqual(mockAdvisor);
        expect(model.findOneAndDelete).toHaveBeenCalledWith({ _id: advisorId });
    });

    it('should return advisor and associated clients', async () => {
        const advisorId = '507f191e810c19729de860ea';

        const clients = [
            {
                _id: '6750caa88f05311c5b33c3f4',
                phone: '0620853890',
                mail: 'test@mail.com',
                passcode: 'Password123',
                birthdate: new Date('2004-02-09T00:00:00Z'),
                address: '23 Rue Toulouse Lautrec',
                zipcode: 33530,
                country: 'France',
                amount: 0,
            },
        ];

        (clientService.findOne as jest.Mock).mockResolvedValueOnce(clients[0]);

        const result = await service.findClients(advisorId);

        expect(result).toEqual({
            advisor: mockAdvisor,
            clients,
        });

        expect(model.findOne).toHaveBeenCalledWith({ _id: advisorId });
    });
});