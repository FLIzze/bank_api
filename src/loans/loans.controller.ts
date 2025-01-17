import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoansDto } from './dto/create-loans.dto';

@Controller('loans')
export class LoansController {
    constructor(private readonly LoansService: LoansService) {}

    @Post()
    async create(@Body() CreateLoansDto:CreateLoansDto) {
        return this.LoansService.create(CreateLoansDto);
    }

    @Get('loanId')
    async findOne(@Param('loanId') loanId: string) {
        return this.LoansService.findOne(loanId);
    }

    @Get('client/:clientId')
    async findAllByClient(@Param('clientId') clientId: string) {
        return this.LoansService.findAllByClient(clientId);
    }

    @Put(':loanId')
    async update(@Param('loanId') loanId: string, @Body() CreateLoansDto: CreateLoansDto) {
        return this.LoansService.update(loanId, CreateLoansDto);
    }

    @Delete(':loanId')
    async delete(@Param('loanId') loanId: string) {
        return this.LoansService.delete(loanId);
    }
}
