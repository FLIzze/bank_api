import { Model } from "mongoose";
import { AccountsService } from "./accounts.service"
import { Accounts } from "./interfaces/accounts.interface";
import { Test, TestingModule } from "@nestjs/testing";

describe('AccountsService', () => {
    let service: AccountsService;
    let model: Model<Accounts>;

    beforeEach(async () => {
        const mockAccounts = {
            clientId: "6780df8b3f630404b800ca92",
            accountNumber: 1234567897,
            balance: 700,
            creditCards: []
        }

        const mockAccountsModel = {
            create: jest.fn().mockResolvedValue(mockAccounts),
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
})