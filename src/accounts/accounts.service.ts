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

    async findOne(clientId: string): Promise<Accounts> {
        return this.accountModel.findOne({ clientId });
    }

    async update(clientId: string, createAccountDto: CreateAccountsDto): Promise<Accounts> {
        return this.accountModel.findOneAndUpdate({ clientId }, createAccountDto, { new: true }).exec();
    }

    async delete(clientId: string): Promise<Accounts> {
        return this.accountModel.findOneAndDelete({ clientId }).exec();
    }

    async findBalance(clientId: string): Promise<Accounts> {
        return this.accountModel.findOne({ clientId }).select('balance').exec();
    }
}
