import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Loans } from './interfaces/loans.interface';

@Injectable()
export class LoansService {
    constructor(
        @Inject('LOANS_MODEL') 
        private readonly loanModel: Model<Loans>,
    ) {}

    async create(loanData: Loans): Promise<Loans> {
        return this.loanModel.create(loanData)
    }

    async findOne(loanId: string): Promise<Loans> {
        return this.loanModel.findById(loanId).exec();
    }

    async findAllByClient(clientId: string): Promise<Loans[]> {
        return this.loanModel.find({ clientId }).exec();
    }

    async update(loanId: string, loanData: Loans): Promise<Loans> {
        return this.loanModel.findByIdAndUpdate(loanId, loanData, { new: true }).exec();
    }

    async delete(loanId: string): Promise<Loans> {
        return this.loanModel.findByIdAndDelete(loanId).exec();
    }

}
