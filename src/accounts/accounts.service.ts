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
        const createdAccount = new this.accountModel(createAccountDto);
        return createdAccount.save();
    }

    async findAll(): Promise<Accounts[]> {
        return this.accountModel.find().populate('creditCards').exec();
    }
}
