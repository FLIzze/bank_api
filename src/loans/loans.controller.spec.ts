import { Test, TestingModule } from '@nestjs/testing';
import { LoansController } from './loans.controller';
import { LoansService } from './loans.service';
import { CreateLoansDto } from './dto/create-loans.dto';
import { Loans } from './interfaces/loans.interface';

describe('LoansController', () => {
    let controller: LoansController;
    let service: LoansService;

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

    const mockLoansService = {
        create: jest.fn().mockResolvedValue(mockLoan),
        findOne: jest.fn().mockResolvedValue(mockLoan),
        findAllByClient: jest.fn().mockResolvedValue([mockLoan]),
        update: jest.fn().mockResolvedValue({ ...mockLoan, amount: 1500 }),
        delete: jest.fn().mockResolvedValue(mockLoan),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LoansController],
            providers: [
                {
                    provide: LoansService,
                    useValue: mockLoansService,
                },
            ],
        }).compile();

        controller = module.get<LoansController>(LoansController);
        service = module.get<LoansService>(LoansService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a new loan and return it', async () => {
            const createDto: CreateLoansDto = {
                clientId: '1',
                amount: 1000,
                interestRate: 0.05,
                startDate: new Date('2021-03-09T00:00:00Z'),
                endDate: new Date('2023-03-09T00:00:00Z'),
                monthlyPayment: 100,
                remainingBalance: 500,
                status: 'Active',
            };

            const result = await controller.create(createDto);
            expect(result).toEqual(mockLoan);
            expect(service.create).toHaveBeenCalledWith(createDto);
        });
    });

    describe('findOne', () => {
        it('should return a single loan by ID', async () => {
            const loanId = '507f191e810c19729de860ea';
            const result = await controller.findOne(loanId);
            expect(result).toEqual(mockLoan);
            expect(service.findOne).toHaveBeenCalledWith(loanId);
        });
    });

    describe('findAllByClient', () => {
        it('should return an array of loans by client ID', async () => {
            const clientId = '1';
            const result = await controller.findAllByClient(clientId);
            expect(result).toEqual([mockLoan]);
            expect(service.findAllByClient).toHaveBeenCalledWith(clientId);
        });
    });

    describe('update', () => {
        it('should update a loan and return the updated loan', async () => {
            const loanId = '507f191e810c19729de860ea';
            const updateDto: CreateLoansDto = {
                clientId: '1',
                amount: 1500,
                interestRate: 0.04,
                startDate: new Date('2021-03-09T00:00:00Z'),
                endDate: new Date('2023-03-09T00:00:00Z'),
                monthlyPayment: 150,
                remainingBalance: 800,
                status: 'Updated',
            };

            const result = await controller.update(loanId, updateDto);
            expect(result).toEqual({ ...mockLoan, amount: 1500 });
            expect(service.update).toHaveBeenCalledWith(loanId, updateDto);
        });
    });

    describe('delete', () => {
        it('should delete a loan and return the deleted loan', async () => {
            const loanId = '507f191e810c19729de860ea';
            const result = await controller.delete(loanId);
            expect(result).toEqual(mockLoan);
            expect(service.delete).toHaveBeenCalledWith(loanId);
        });
    });
});
