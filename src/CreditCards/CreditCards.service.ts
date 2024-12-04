import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreditCards } from './interfaces/CreditCards.interfaces';
import { CreateCreditCardsDto } from './dto/Create-CreditCards.dto';

@Injectable()
export class CreditCardsService {
    constructor(
        @Inject('CREDITCARDS_MODEL')
        private creditCardsModel: Model<CreditCards>
    ) {}

    async create(CreateCreditCardsDto:CreateCreditCardsDto):Promise<CreditCards> {
        const createdCreditCard = new this.creditCardsModel(CreateCreditCardsDto);
        return createdCreditCard.save();
    }

    async findall():Promise<CreditCards[]> {
        return this.creditCardsModel.find().exec();
    }
}