import { Test, TestingModule } from '@nestjs/testing';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { CreateAccountsDto } from './dto/create-accounts.dto';
import { Accounts } from './interfaces/accounts.interface';

describe('AccountsController', () => {
    let controller: AccountsController;
    let service: AccountsService;

    const mockAccount: Accounts = {
        clientId: "6780df8b3f630404b800ca92",
        accountNumber: 1234567897,
        balance: 1234567897,
        creditCards: [],
    };

    const mockAccountsService = {
        create: jest.fn().mockResolvedValue(mockAccount),
        findAll: jest.fn().mockResolvedValue([mockAccount]),
        findOne: jest.fn().mockResolvedValue(mockAccount),
        findAllByClientId: jest.fn().mockResolvedValue([mockAccount]),
        update: jest.fn().mockResolvedValue({ ...mockAccount, balance: 5000 }),
        delete: jest.fn().mockResolvedValue(mockAccount),
        findBalance: jest.fn().mockResolvedValue({ balance: 1234567897 }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AccountsController],
            providers: [
                {
                    provide: AccountsService,
                    useValue: mockAccountsService,
                },
            ],
        }).compile();

        controller = module.get<AccountsController>(AccountsController);
        service = module.get<AccountsService>(AccountsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a new account and return it', async () => {
            const createDto: CreateAccountsDto = {
                clientId: "6780df8b3f630404b800ca92",
                accountNumber: 1234567897,
                balance: 1234567897,
                creditCards: [],
            };

            const result = await controller.create(createDto);
            expect(result).toEqual(mockAccount);
            expect(service.create).toHaveBeenCalledWith(createDto);
        });
    });

    describe('findAll', () => {
        it('should return an array of accounts', async () => {
            const result = await controller.findAll();
            expect(result).toEqual([mockAccount]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a single account by account number', async () => {
            const accountNumber = '1234567897';
            const result = await controller.findOne(accountNumber);
            expect(result).toEqual(mockAccount);
            expect(service.findOne).toHaveBeenCalledWith(accountNumber);
        });
    });

    describe('findAllByClientId', () => {
        it('should return an array of accounts by client ID', async () => {
            const clientId = '6780df8b3f630404b800ca92';
            const result = await controller.findAllByClientId(clientId);
            expect(result).toEqual([mockAccount]);
            expect(service.findAllByClientId).toHaveBeenCalledWith(clientId);
        });
    });

    describe('update', () => {
        it('should update an account and return the updated account', async () => {
            const accountNumber = '1234567897';
            const updateDto: CreateAccountsDto = {
                clientId: "6780df8b3f630404b800ca92",
                accountNumber: 1234567897,
                balance: 5000,
                creditCards: [],
            };

            const result = await controller.update(accountNumber, updateDto);
            expect(result).toEqual({ ...mockAccount, balance: 5000 });
            expect(service.update).toHaveBeenCalledWith(accountNumber, updateDto);
        });
    });

    describe('delete', () => {
        it('should delete an account and return the deleted account', async () => {
            const accountNumber = '1234567897';
            const result = await controller.delete(accountNumber);
            expect(result).toEqual(mockAccount);
            expect(service.delete).toHaveBeenCalledWith(accountNumber);
        });
    });

    describe('findBalance', () => {
        it('should return the balance of the account', async () => {
            const accountNumber = '1234567897';
            const result = await controller.findBalance(accountNumber);
            expect(result).toEqual({ balance: 1234567897 });
            expect(service.findBalance).toHaveBeenCalledWith(accountNumber);
        });
    });
});
