import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreditcardsService } from './creditcards.service';
import { CreateCreditcardsDto } from './dto/create-creditcards.dto';

@Controller('creditcards')
export class CreditcardsController {
    constructor(private readonly CreditcardsService:CreditcardsService) {}

    @Post()
    async create(@Body() CreateCreditcardsDto:CreateCreditcardsDto) {
        return this.CreditcardsService.create(CreateCreditcardsDto);
    }

    @Get()
    async findAll() {
        return this.CreditcardsService.findAll();
    }

    @Get(':creditCardId')
    async findOne(@Param('creditCardId') creditCardId:string) {
        return this.CreditcardsService.findOne(creditCardId);
    }

    @Put(':creditCardId')
    async update(@Param('creditCardId') creditCardId:string, @Body() CreateCreditcardsDto:CreateCreditcardsDto) {
        return this.CreditcardsService.update(creditCardId, CreateCreditcardsDto);
    }

    @Delete(':creditCardId')
    async delete(@Param('creditCardId') creditCardId:string) {
        return this.CreditcardsService.delete(creditCardId);
    }
}
