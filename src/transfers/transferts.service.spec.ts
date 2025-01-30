import { Test, TestingModule } from '@nestjs/testing';
import { TransfersService } from './transfers.service';
import { Model } from 'mongoose';
import { Transfers } from './interfaces/transfers.interfaces';
import { CreateTransfersDto } from './dto/create-transfers.dto';

describe('TransfersService', () => {
    let service: TransfersService;
    let model: Model<Transfers>;

    const mockTransfer: Transfers = {
        senderAccount: 1,
        receiverAccount: 2,
        amount: 100,
        transferDate: new Date('2021-03-09T00:00:00Z'),
    };

    const mockTransfersModel = {
        create: jest.fn().mockResolvedValue(mockTransfer),
        find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockTransfer]) }),
        findById: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockTransfer) }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TransfersService,
                {
                    provide: 'TRANSFERS_MODEL',
                    useValue: mockTransfersModel,
                },
            ],
        }).compile();

        service = module.get<TransfersService>(TransfersService);
        model = module.get<Model<Transfers>>('TRANSFERS_MODEL');
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a transfer', async () => {
        const transferData: CreateTransfersDto = {
            senderAccount: '1',
            receiverAccount: '2',
            amount: 100,
            transferDate: new Date('2021-03-09T00:00:00Z'),
        };

        const result = await service.create(transferData);

        expect(result).toEqual(mockTransfer);
        expect(mockTransfersModel.create).toHaveBeenCalledWith(transferData);
    });

    it('should return all transfers', async () => {
        const result = await service.findAll();

        expect(result).toEqual([mockTransfer]);
        expect(mockTransfersModel.find).toHaveBeenCalled();
    });

    it('should return a transfer by ID', async () => {
        const transferId = '507f191e810c19729de860ea';

        const result = await service.findOne(transferId);

        expect(result).toEqual(mockTransfer);
        expect(mockTransfersModel.findById).toHaveBeenCalledWith(transferId);
    });

    it('should find transfers by account number', async () => {
        const accountNumber = '1';

        (mockTransfersModel.find as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue([mockTransfer]),
        });

        const result = await service.findBySenderAccountNumber(accountNumber);

        expect(result).toEqual([mockTransfer]);
        expect(mockTransfersModel.find).toHaveBeenCalledWith({
            $or: [{ fromAccount: accountNumber }, { toAccount: accountNumber }],
        });
    });
});
