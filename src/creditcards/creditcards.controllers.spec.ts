import { Test, TestingModule } from '@nestjs/testing';
import { CreditcardsController } from './creditcards.controller';
import { CreditcardsService } from './creditcards.service';
import { CreateCreditcardsDto } from './dto/create-creditcards.dto';

describe('CreditcardsController', () => {
    let controller: CreditcardsController;
    let service: CreditcardsService;

    const mockCreditCard = {
        _id: '507f191e810c19729de860ea',
        accountId: '1',
        cardNumber: '1234567890123456',
        ccv: 123,
        expirationDate: new Date('2023-03-09T00:00:00Z'),
        type: 'Visa',
        status: 'Active',
    };

    const mockCreditcardsService = {
        create: jest.fn().mockResolvedValue(mockCreditCard),
        findAll: jest.fn().mockResolvedValue([mockCreditCard]),
        findOne: jest.fn().mockResolvedValue(mockCreditCard),
        update: jest.fn().mockResolvedValue({ ...mockCreditCard, status: 'Inactive' }),
        delete: jest.fn().mockResolvedValue(mockCreditCard),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CreditcardsController],
            providers: [
                {
                    provide: CreditcardsService,
                    useValue: mockCreditcardsService,
                },
            ],
        }).compile();

        controller = module.get<CreditcardsController>(CreditcardsController);
        service = module.get<CreditcardsService>(CreditcardsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a new credit card and return it', async () => {
            const createDto: CreateCreditcardsDto = {
                accountId: '1',
                cardNumber: 1234567890123456,
                ccv: 123,
                expirationDate: new Date('2023-03-09T00:00:00Z'),
                type: 'Visa',
                status: 'Active',
            };

            const result = await controller.create(createDto);
            expect(result).toEqual(mockCreditCard);
            expect(service.create).toHaveBeenCalledWith(createDto);
        });
    });

    describe('findAll', () => {
        it('should return an array of credit cards', async () => {
            const result = await controller.findAll();
            expect(result).toEqual([mockCreditCard]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a single credit card by ID', async () => {
            const creditCardId = '507f191e810c19729de860ea';
            const result = await controller.findOne(creditCardId);
            expect(result).toEqual(mockCreditCard);
            expect(service.findOne).toHaveBeenCalledWith(creditCardId);
        });
    });

    describe('update', () => {
        it('should update a credit card and return the updated credit card', async () => {
            const creditCardId = '507f191e810c19729de860ea';
            const updateDto: CreateCreditcardsDto = {
                accountId: '1',
                cardNumber: 1234567890123456,
                ccv: 123,
                expirationDate: new Date('2023-03-09T00:00:00Z'),
                type: 'Visa',
                status: 'Inactive',
            };

            const result = await controller.update(creditCardId, updateDto);
            expect(result).toEqual({ ...mockCreditCard, status: 'Inactive' });
            expect(service.update).toHaveBeenCalledWith(creditCardId, updateDto);
        });
    });

    describe('delete', () => {
        it('should delete a credit card and return the deleted credit card', async () => {
            const creditCardId = '507f191e810c19729de860ea';
            const result = await controller.delete(creditCardId);
            expect(result).toEqual(mockCreditCard);
            expect(service.delete).toHaveBeenCalledWith(creditCardId);
        });
    });
});
