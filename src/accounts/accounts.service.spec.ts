import { Model } from "mongoose";
import { AccountsService } from "./accounts.service"
import { Accounts } from "./interfaces/accounts.interface";
import { Test, TestingModule } from "@nestjs/testing";
import { CreateAccountsDto } from "./dto/create-accounts.dto";

describe('AccountsService', () => {
    let service: AccountsService;
    let model: Model<Accounts>;

    beforeEach(async () => {
        const mockAccount = {
            clientId: "6780df8b3f630404b800ca92",
            accountNumber: 1234567897,
            balance: 1234567897,
            creditCards: []
        }

        const mockAccountsModel = {
            create: jest.fn().mockResolvedValue(mockAccount),
            find: jest.fn().mockReturnThis(),
            exec: jest.fn(),
            findOne: jest.fn().mockReturnThis(),
            findOneAndUpdate: jest.fn().mockReturnThis(),
            findOneAndDelete: jest.fn().mockReturnThis(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AccountsService,
                {
                provide: 'ACCOUNTS_MODEL', 
                useValue: mockAccountsModel,
                },
            ],
        }).compile();

        service = module.get<AccountsService>(AccountsService);
        model = module.get<Model<Accounts>>('ACCOUNTS_MODEL');  
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create account', async () => {
        const accountDto:CreateAccountsDto = {
            clientId: "6780df8b3f630404b800ca92",
            accountNumber: 1234567897,
            balance: 1234567897,
            creditCards: []
        }

        const createdAccount = {_id: '507f191e810c19729de860ea', ...accountDto};

        (model.create as jest.Mock).mockResolvedValue(createdAccount);

        const result = await service.create(accountDto)

        expect(result).toEqual(createdAccount);
        expect(model.create).toHaveBeenCalledWith(accountDto)
    })

    it('should return all accounts', async () => {
        const mockAccounts = [
            {
                _id: '507f191e810c19729de860ea',
                clientId: "6780df8b3f630404b800ca92",
                accountNumber: 1234567897,
                balance: 1234567897,
                creditCards: []
            }
        ];
    
        (model.find as jest.Mock).mockResolvedValue(mockAccounts);
    
        const result = await service.findAll();
    
        expect(result).toEqual(mockAccounts);
        expect(model.find).toHaveBeenCalled();
    });

    it('should return one account by ID', async () => {
        const mockAccount = {
            _id: '507f191e810c19729de860ea',
            clientId: "6780df8b3f630404b800ca92",
            accountNumber: 1234567897,
            balance: 1234567897,
            creditCards: []
        };
    
        (model.findOne as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(mockAccount),
        });
    
        const result = await service.findOne('507f191e810c19729de860ea');
    
        expect(result).toEqual(mockAccount);
        expect(model.findOne).toHaveBeenCalledWith({ accountNumber: '507f191e810c19729de860ea' });
    });

    it('should update an account', async () => {
        const accountId = '507f191e810c19729de860ea';
        const updateDto = {
            clientId: "6750caa88f05311c5b33c3f4",
            accountNumber: 9876543210,
            balance: 5000,
            creditCards: []
        };
    
        const updatedAccount = {
            _id: accountId,
            ...updateDto
        };
    
        (model.findOneAndUpdate as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(updatedAccount),
        });
    
        const result = await service.update(accountId, updateDto);
    
        expect(result).toEqual(updatedAccount);
        expect(model.findOneAndUpdate).toHaveBeenCalledWith(
            { accountNumber: accountId },
            updateDto,
            { new: true }
        );
    });

    it('should delete an account', async () => {
        const accountId = '507f191e810c19729de860ea';
        const mockAccount = {
            _id: accountId,
            clientId: "6750caa88f05311c5b33c3f4",
            accountNumber: 1234567897,
            balance: 5000,
            creditCards: ["1234-5678-9876-5432"]
        };
    
        (model.findOneAndDelete as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(mockAccount),
        });
    
        const result = await service.delete(accountId);
    
        expect(result).toEqual(mockAccount);
        expect(model.findOneAndDelete).toHaveBeenCalledWith({ accountNumber: accountId });
    });
    
    
})