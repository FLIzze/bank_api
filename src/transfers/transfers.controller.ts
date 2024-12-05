import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { Transfers } from './interfaces/transfers.interfaces';
import { CreateTransfersDto } from './dto/create-transfers.dto';

@Controller('transfers')
export class TransfersController {
    constructor(private readonly TransfersService: TransfersService) {}

    @Post()
    async create(@Body() CreateTransfersDto:CreateTransfersDto) {
        return this.TransfersService.create(CreateTransfersDto);
    }

    @Get(':transferId')
    async getTransferById(@Param('transferId') transferId: string): Promise<Transfers> {
        return this.TransfersService.findOne(transferId);
    }

    @Get('account/:accountNumber')
    async getTransfersByAccountNumber(@Param('accountNumber') accountNumber: string): Promise<Transfers[]> {
        return this.TransfersService.findByAccountNumber(accountNumber);
    }
}
