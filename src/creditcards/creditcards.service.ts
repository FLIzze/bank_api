import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Creditcards } from './interfaces/creditcards.interface';

@Injectable()
export class CreditcardsService {
    constructor(
        @Inject('CREDITCARDS_MODEL') private readonly creditCardModel: Model<Creditcards>,
    ) {}

    async create(creditCardData: Creditcards): Promise<Creditcards> {
        const newCard = new this.creditCardModel(creditCardData);
        return newCard.save();
    }

    async findAll(): Promise<Creditcards[]> {
        return this.creditCardModel.find().exec();
    }

    async findOne(id: string): Promise<Creditcards> {
        return this.creditCardModel.findOne({ _id: id });
    }

    async update(id: string, creditCardData: Creditcards): Promise<Creditcards> {
        return this.creditCardModel.findByIdAndUpdate(id, creditCardData, { new: true }).exec();
    }

    async delete(id: string): Promise<Creditcards> {
        return this.creditCardModel.findOneAndDelete({ _id: id }).exec();
    }
}
