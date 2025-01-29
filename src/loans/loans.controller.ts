import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoansDto } from './dto/create-loans.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Public } from 'src/auth/public-strategy';

@Controller('loans')
export class LoansController {
    constructor(private readonly LoansService: LoansService) {}

    @Public()
    @ApiOperation({ summary: 'Create a new loan' })
    @Post()
    async create(@Body() CreateLoansDto:CreateLoansDto) {
        return this.LoansService.create(CreateLoansDto);
    }

    @Public()
    @ApiOperation({ summary: 'Find all loans' })
    @Get('loanId')
    async findOne(@Param('loanId') loanId: string) {
        return this.LoansService.findOne(loanId);
    }

    @Public()
    @ApiOperation({ summary: 'Find all loans' })
    @Get('client/:clientId')
    async findAllByClient(@Param('clientId') clientId: string) {
        return this.LoansService.findAllByClient(clientId);
    }

    @Public()
    @ApiOperation({ summary: 'Find all loans' })
    @Put(':loanId')
    async update(@Param('loanId') loanId: string, @Body() CreateLoansDto: CreateLoansDto) {
        return this.LoansService.update(loanId, CreateLoansDto);
    }

    @Public()
    @ApiOperation({ summary: 'Find all loans' })
    @Delete(':loanId')
    async delete(@Param('loanId') loanId: string) {
        return this.LoansService.delete(loanId);
    }
}
