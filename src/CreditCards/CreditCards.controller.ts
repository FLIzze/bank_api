import {Controller, Body, Get, Post} from '@nestjs/common';
import { CreateCreditCardsDto } from './dto/Create-CreditCards.dto';
import { CreditCardsService } from './CreditCards.service';
import { CreditCards } from './interfaces/CreditCards.interfaces';

@Controller('creditcards')
export class CreditCardsController {
    constructor(private readonly CreditCardsService:CreditCardsService) {}

    @Post()
    async create(@Body() CreateCreditCardsDto:CreateCreditCardsDto) {
        return this.CreditCardsService.create(CreateCreditCardsDto);
    }

    @Get()
    async findAll():Promise<CreditCards[]> {
        return this.CreditCardsService.findall();
    }
}