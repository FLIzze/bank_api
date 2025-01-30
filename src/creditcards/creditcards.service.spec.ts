import { Test, TestingModule } from '@nestjs/testing';
import { CreditcardsService } from './creditcards.service';
import { Model } from 'mongoose';
import { Creditcards } from './interfaces/creditcards.interface';

describe('CreditcardsService', () => {
    let service: CreditcardsService;
    let model: Model<Creditcards>;

    const mockCreditCard: Creditcards = {
        accountId: '1',
        cardNumber: 1234567890123456,
        ccv: 123,
        expirationDate: new Date('2023-03-09T00:00:00Z'),
        type: 'Visa',
        status: 'Active',
    };

    const mockCreditCardModel = {
        create: jest.fn().mockResolvedValue(mockCreditCard),
        find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockCreditCard]) }),
        findOne: jest.fn().mockResolvedValue(mockCreditCard),
        findByIdAndUpdate: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockCreditCard) }),
        findOneAndDelete: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockCreditCard) }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreditcardsService,
                {
                    provide: 'CREDITCARDS_MODEL',
                    useValue: mockCreditCardModel,
                },
            ],
        }).compile();

        service = module.get<CreditcardsService>(CreditcardsService);
        model = module.get<Model<Creditcards>>('CREDITCARDS_MODEL');
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a credit card', async () => {
        const creditCardData: Creditcards = {
            accountId: '1',
            cardNumber: 1234567890123456,
            ccv: 123,
            expirationDate: new Date('2023-03-09T00:00:00Z'),
            type: 'Visa',
            status: 'Active',
        };

        const result = await service.create(creditCardData);

        expect(result).toEqual(mockCreditCard);
        expect(mockCreditCardModel.create).toHaveBeenCalledWith(creditCardData);
    });

    it('should return all credit cards', async () => {
        const result = await service.findAll();

        expect(result).toEqual([mockCreditCard]);
        expect(mockCreditCardModel.find).toHaveBeenCalled();
    });

    it('should return one credit card by ID', async () => {
        const cardId = '507f191e810c19729de860ea';

        const result = await service.findOne(cardId);

        expect(result).toEqual(mockCreditCard);
        expect(mockCreditCardModel.findOne).toHaveBeenCalledWith({ _id: cardId });
    });

    it('should update a credit card', async () => {
        const cardId = '507f191e810c19729de860ea';
        const updateData: Creditcards = {
            accountId: '1',
            cardNumber: 9876543210987654,
            ccv: 456,
            expirationDate: new Date('2025-12-31T00:00:00Z'),
            type: 'MasterCard',
            status: 'Inactive',
        };

        const updatedCard = { _id: cardId, ...updateData };

        (mockCreditCardModel.findByIdAndUpdate as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(updatedCard),
        });

        const result = await service.update(cardId, updateData);

        expect(result).toEqual(updatedCard);
        expect(mockCreditCardModel.findByIdAndUpdate).toHaveBeenCalledWith(
            cardId,
            updateData,
            { new: true }
        );
    });

    it('should delete a credit card', async () => {
        const cardId = '507f191e810c19729de860ea';

        const result = await service.delete(cardId);

        expect(result).toEqual(mockCreditCard);
        expect(mockCreditCardModel.findOneAndDelete).toHaveBeenCalledWith({ _id: cardId });
    });
});
