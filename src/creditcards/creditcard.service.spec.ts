import { Test, TestingModule } from '@nestjs/testing';
import { CreditcardsService } from './creditcards.service';
import { Model } from 'mongoose';
import { Creditcards } from './interfaces/creditcards.interface';

describe('CreditcardsService', () => {
    let service: CreditcardsService;
    let model: Model<Creditcards>;

    const mockCreditCardModel = {
        create: jest.fn(),
        find: jest.fn(),
        findOne: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findOneAndDelete: jest.fn(),
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
});