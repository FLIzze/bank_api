import { Test, TestingModule } from '@nestjs/testing';
import { LoansService } from './loans.service';
import { Model } from 'mongoose';
import { Loans } from './interfaces/loans.interface';

describe('LoansService', () => {
    let service: LoansService;
    let model: Model<Loans>;

    const mockLoan: Loans = {
        clientId: '1',
        amount: 1000,
        interestRate: 0.05,
        startDate: new Date('2021-03-09T00:00:00Z'),
        endDate: new Date('2023-03-09T00:00:00Z'),
        monthlyPayment: 100,
        remainingBalance: 500,
        status: 'Active',
    };

    const mockLoanModel = {
        create: jest.fn().mockResolvedValue(mockLoan),
        findById: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockLoan) }),
        find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockLoan]) }),
        findByIdAndUpdate: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockLoan) }),
        findByIdAndDelete: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockLoan) }),
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

    it('should create a loan', async () => {
        const loanData: Loans = {
            clientId: '1',
            amount: 1000,
            interestRate: 0.05,
            startDate: new Date('2021-03-09T00:00:00Z'),
            endDate: new Date('2023-03-09T00:00:00Z'),
            monthlyPayment: 100,
            remainingBalance: 500,
            status: 'Active',
        };

        const result = await service.create(loanData);

        expect(result).toEqual(mockLoan);
        expect(mockLoanModel.create).toHaveBeenCalledWith(loanData);
    });

    it('should return a loan by ID', async () => {
        const loanId = '507f191e810c19729de860ea';

        const result = await service.findOne(loanId);

        expect(result).toEqual(mockLoan);
        expect(mockLoanModel.findById).toHaveBeenCalledWith(loanId);
    });

    it('should return all loans by client ID', async () => {
        const clientId = '1';

        const result = await service.findAllByClient(clientId);

        expect(result).toEqual([mockLoan]);
        expect(mockLoanModel.find).toHaveBeenCalledWith({ clientId });
    });

    it('should update a loan', async () => {
        const loanId = '507f191e810c19729de860ea';
        const updatedLoanData: Loans = {
            clientId: '1',
            amount: 1500,
            interestRate: 0.04,
            startDate: new Date('2022-01-01T00:00:00Z'),
            endDate: new Date('2024-01-01T00:00:00Z'),
            monthlyPayment: 150,
            remainingBalance: 800,
            status: 'Updated',
        };

        const updatedLoan = { _id: loanId, ...updatedLoanData };

        (mockLoanModel.findByIdAndUpdate as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(updatedLoan),
        });

        const result = await service.update(loanId, updatedLoanData);

        expect(result).toEqual(updatedLoan);
        expect(mockLoanModel.findByIdAndUpdate).toHaveBeenCalledWith(
            loanId,
            updatedLoanData,
            { new: true }
        );
    });

    it('should delete a loan', async () => {
        const loanId = '507f191e810c19729de860ea';

        const result = await service.delete(loanId);

        expect(result).toEqual(mockLoan);
        expect(mockLoanModel.findByIdAndDelete).toHaveBeenCalledWith(loanId);
    });
});
