import { CreateCreditCardsDto } from './dto/Create-CreditCards.dto';
import { CreditCardsService } from './CreditCards.service';
import { CreditCards } from './interfaces/CreditCards.interfaces';
export declare class CreditCardsController {
    private readonly CreditCardsService;
    constructor(CreditCardsService: CreditCardsService);
    create(CreateCreditCardsDto: CreateCreditCardsDto): Promise<CreditCards>;
    findAll(): Promise<CreditCards[]>;
}
