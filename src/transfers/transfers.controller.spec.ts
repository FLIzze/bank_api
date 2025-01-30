import { Test, TestingModule } from '@nestjs/testing';
import { TransfersController } from './transfers.controller';
import { TransfersService } from './transfers.service';
import { CreateTransfersDto } from './dto/create-transfers.dto';
import { Transfers } from './interfaces/transfers.interfaces';

describe('TransfersController', () => {
    let controller: TransfersController;
    let service: TransfersService;

    const mockTransfer: Transfers = {
        senderAccount: 1,
        receiverAccount: 2,
        amount: 500,
        transferDate: new Date('2022-01-01T00:00:00Z'),
    };

    const mockTransfersService = {
        create: jest.fn().mockResolvedValue(mockTransfer),
        findOne: jest.fn().mockResolvedValue(mockTransfer),
        findByAccountNumber: jest.fn().mockResolvedValue([mockTransfer]),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TransfersController],
            providers: [
                {
                    provide: TransfersService,
                    useValue: mockTransfersService,
                },
            ],
        }).compile();

        controller = module.get<TransfersController>(TransfersController);
        service = module.get<TransfersService>(TransfersService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a new transfer and return it', async () => {
            const createDto: CreateTransfersDto = {
                senderAccount: '1',
                receiverAccount: '2',
                amount: 500,
                transferDate: new Date('2022-01-01T00:00:00Z'),
            };

            const result = await controller.create(createDto);
            expect(result).toEqual(mockTransfer);
            expect(service.create).toHaveBeenCalledWith(createDto);
        });
    });

    describe('getTransferById', () => {
        it('should return a transfer by ID', async () => {
            const transferId = '507f191e810c19729de860ea';
            const result = await controller.getTransferById(transferId);
            expect(result).toEqual(mockTransfer);
            expect(service.findOne).toHaveBeenCalledWith(transferId);
        });
    });

    describe('getTransfersByAccountNumber', () => {
        it('should return an array of transfers for an account', async () => {
            const accountNumber = '1';
            const result = await controller.getTransfersByAccountNumber(accountNumber);
            expect(result).toEqual([mockTransfer]);
            expect(service.findBySenderAccountNumber).toHaveBeenCalledWith(accountNumber);
        });
    });
});
