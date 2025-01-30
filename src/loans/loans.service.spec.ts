import { Test, TestingModule } from '@nestjs/testing';
import { LoansService } from './loans.service';
import { Model } from 'mongoose';
import { Loans } from './interfaces/loans.interface';

describe('LoansService', () => {
    let service: LoansService;
    let model: Model<Loans>;

    const mockLoanModel = {
        create: jest.fn(),
        findById: jest.fn(),
        find: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LoansService,
                {
                    provide: 'LOANS_MODEL',
                    useValue: mockLoanModel,
                },
            ],
        }).compile();

        service = module.get<LoansService>(LoansService);
        model = module.get<Model<Loans>>('LOANS_MODEL');
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});