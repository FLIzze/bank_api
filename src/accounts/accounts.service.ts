import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Accounts } from './interfaces/accounts.interface';
import { CreateAccountsDto } from './dto/create-accounts.dto';

@Injectable()
export class AccountsService {
    constructor(
        @Inject('ACCOUNTS_MODEL') private accountModel: Model<Accounts>,
    ) {}

    async create(createAccountDto: CreateAccountsDto): Promise<Accounts> {
        const existingAccount = await this.accountModel.findOne({ accountNumber: createAccountDto.accountNumber }).exec();
        if (existingAccount) {
            throw new Error(`Account number ${createAccountDto.accountNumber} already exists.`);
        }

        const createdAccount = new this.accountModel(createAccountDto);
        return createdAccount.save();
    }

    async findAll(): Promise<Accounts[]> {
        return this.accountModel.find();
    }

    async findOne(accountNumber: string): Promise<Accounts> {
        return this.accountModel.findOne({ accountNumber }).exec();
    }

    async update(accountNumber: string, createAccountDto: CreateAccountsDto): Promise<Accounts> {
        return this.accountModel.findOneAndUpdate({ accountNumber }, createAccountDto, { new: true }).exec();
    }

    async delete(accountNumber: string): Promise<Accounts> {
        return this.accountModel.findOneAndDelete({ accountNumber }).exec();
    }

    async findBalance(accountNumber: string): Promise<Accounts> {
        return this.accountModel.findOne({ accountNumber }).select('balance').exec();
    }

    async findAllByClientId(clientId: string): Promise<Accounts[]> {
        return this.accountModel.find({ clientId }).exec();
    }
}
