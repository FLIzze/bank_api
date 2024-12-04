import { Model } from 'mongoose';
import { CreditCards } from './interfaces/CreditCards.interfaces';
import { CreateCreditCardsDto } from './dto/Create-CreditCards.dto';
export declare class CreditCardsService {
    private creditCardsModel;
    constructor(creditCardsModel: Model<CreditCards>);
    create(CreateCreditCardsDto: CreateCreditCardsDto): Promise<CreditCards>;
    findall(): Promise<CreditCards[]>;
}
