import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreditcardsService } from './creditcards.service';
import { CreateCreditcardsDto } from './dto/create-creditcards.dto';
import { Public } from 'src/auth/public-strategy';
import { ApiOperation } from '@nestjs/swagger';

@Controller('creditcards')
export class CreditcardsController {
    constructor(private readonly CreditcardsService:CreditcardsService) {}

    @Public()
    @ApiOperation({ summary: 'Create a new credit card' })
    @Post()
    async create(@Body() CreateCreditcardsDto:CreateCreditcardsDto) {
        return this.CreditcardsService.create(CreateCreditcardsDto);
    }

    @Public()
    @ApiOperation({ summary: 'Find all credit cards' })
    @Get()
    async findAll() {
        return this.CreditcardsService.findAll();
    }

    @Public()
    @ApiOperation({ summary: 'Find a credit card by id' })
    @Get(':creditCardId')
    async findOne(@Param('creditCardId') creditCardId:string) {
        return this.CreditcardsService.findOne(creditCardId);
    }

    @Public()
    @ApiOperation({ summary: 'Update a credit card' })
    @Put(':creditCardId')
    async update(@Param('creditCardId') creditCardId:string, @Body() CreateCreditcardsDto:CreateCreditcardsDto) {
        return this.CreditcardsService.update(creditCardId, CreateCreditcardsDto);
    }

    @Public()
    @ApiOperation({ summary: 'Delete a credit card' })
    @Delete(':creditCardId')
    async delete(@Param('creditCardId') creditCardId:string) {
        return this.CreditcardsService.delete(creditCardId);
    }
}
