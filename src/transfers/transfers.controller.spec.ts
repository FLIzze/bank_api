import { Test, TestingModule } from '@nestjs/testing';
import { TransfersController } from './transfers.controller';
import { TransfersService } from './transfers.service';
import { AccountsService } from '../accounts/accounts.service';

describe('TransfersController', () => {
    let controller: TransfersController;
    let transfersService: TransfersService;
    let accountsService: AccountsService;

    const mockTransfer = {
        senderAccount: 1,
        receiverAccount: 2,
        amount: 500,
        transferDate: new Date('2022-01-01T00:00:00Z'),
    };

    const mockTransfersService = {
        create: jest.fn().mockResolvedValue(mockTransfer),
        findOne: jest.fn().mockResolvedValue(mockTransfer),
        findBySenderAccountNumber: jest.fn().mockResolvedValue([mockTransfer]),
    };

    const mockAccountsService = {
        findOne: jest.fn().mockResolvedValue({ accountNumber: '1', balance: 1000 }),
        updateBalance: jest.fn().mockResolvedValue(true),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TransfersController],
            providers: [
                { provide: TransfersService, useValue: mockTransfersService },
                { provide: AccountsService, useValue: mockAccountsService }, // ADD THIS
            ],
        }).compile();

        controller = module.get<TransfersController>(TransfersController);
        transfersService = module.get<TransfersService>(TransfersService);
        accountsService = module.get<AccountsService>(AccountsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

