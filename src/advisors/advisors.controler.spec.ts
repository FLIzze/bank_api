import { Test, TestingModule } from '@nestjs/testing';
import { AdvisorsController } from './advisors.controller';
import { AdvisorsService } from './advisors.service';
import { CreateAdvisorsDto } from './dto/create-advisors.dto';

describe('AdvisorsController', () => {
    let controller: AdvisorsController;
    let service: AdvisorsService;

    const mockAdvisor = {
        _id: '507f191e810c19729de860ea',
        name: "John Doe",
        email: "johndoe@email.com",
        phone: "0620853890",
        managedClients: ["6750caa88f05311c5b33c3f4"],
        region: "France",
    };

    const mockClients = [
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
        }
    ];

    const mockAdvisorsService = {
        create: jest.fn().mockResolvedValue(mockAdvisor),
        findOne: jest.fn().mockResolvedValue(mockAdvisor),
        findClients: jest.fn().mockResolvedValue({ advisor: mockAdvisor, clients: mockClients }),
        update: jest.fn().mockResolvedValue({ ...mockAdvisor, region: "Updated Region" }),
        delete: jest.fn().mockResolvedValue(mockAdvisor),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AdvisorsController],
            providers: [
                {
                    provide: AdvisorsService,
                    useValue: mockAdvisorsService,
                },
            ],
        }).compile();

        controller = module.get<AdvisorsController>(AdvisorsController);
        service = module.get<AdvisorsService>(AdvisorsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a new advisor and return it', async () => {
            const createDto: CreateAdvisorsDto = {
                name: "John Doe",
                email: "johndoe@email.com",
                phone: "0620853890",
                managedClients: ["6750caa88f05311c5b33c3f4"],
                region: "France",
            };

            const result = await controller.create(createDto);
            expect(result).toEqual(mockAdvisor);
            expect(service.create).toHaveBeenCalledWith(createDto);
        });
    });

    describe('findOne', () => {
        it('should return a single advisor by ID', async () => {
            const advisorId = '507f191e810c19729de860ea';
            const result = await controller.findOne(advisorId);
            expect(result).toEqual(mockAdvisor);
            expect(service.findOne).toHaveBeenCalledWith(advisorId);
        });
    });

    describe('findClients', () => {
        it('should return an advisor with associated clients', async () => {
            const advisorId = '507f191e810c19729de860ea';
            const result = await controller.findClients(advisorId);
            expect(result).toEqual({ advisor: mockAdvisor, clients: mockClients });
            expect(service.findClients).toHaveBeenCalledWith(advisorId);
        });
    });

    describe('update', () => {
        it('should update an advisor and return the updated advisor', async () => {
            const advisorId = '507f191e810c19729de860ea';
            const updateDto: CreateAdvisorsDto = {
                name: "John Doe",
                email: "johndoe@email.com",
                phone: "0620853890",
                managedClients: ["6750caa88f05311c5b33c3f4"],
                region: "Updated Region",
            };

            const result = await controller.update(advisorId, updateDto);
            expect(result).toEqual({ ...mockAdvisor, region: "Updated Region" });
            expect(service.update).toHaveBeenCalledWith(advisorId, updateDto);
        });
    });

    describe('delete', () => {
        it('should delete an advisor and return the deleted advisor', async () => {
            const advisorId = '507f191e810c19729de860ea';
            const result = await controller.delete(advisorId);
            expect(result).toEqual(mockAdvisor);
            expect(service.delete).toHaveBeenCalledWith(advisorId);
        });
    });
});
