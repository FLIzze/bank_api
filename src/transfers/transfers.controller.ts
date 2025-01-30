import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { Transfers } from './interfaces/transfers.interfaces';
import { CreateTransfersDto } from './dto/create-transfers.dto';
import { Public } from '../auth/public-strategy';
import { ApiOperation } from '@nestjs/swagger';
import { AccountsService } from 'src/accounts/accounts.service';

@Controller('transfers')
export class TransfersController {
    constructor(private readonly TransfersService: TransfersService
        , private readonly accountsService: AccountsService
    ) {}

    @Public()
    @ApiOperation({ summary: 'Create a transfer' })
    @Post()
    async create(@Body() CreateTransfersDto: CreateTransfersDto) {
        const senderAccount = await this.accountsService.findOne(CreateTransfersDto.senderAccount);
        const receiverAccount = await this.accountsService.findOne(CreateTransfersDto.receiverAccount);
    
        if (!senderAccount || senderAccount.balance < CreateTransfersDto.amount) {
            throw new HttpException('Insufficient balance', HttpStatus.BAD_REQUEST);
        }

        console.log(senderAccount.balance - CreateTransfersDto.amount);

    
        await this.accountsService.updateBalance(senderAccount.accountNumber, senderAccount.balance - CreateTransfersDto.amount);
        await this.accountsService.updateBalance(receiverAccount.accountNumber, receiverAccount.balance + CreateTransfersDto.amount);
    
        const transfer = await this.TransfersService.create(CreateTransfersDto);
    
        return transfer;
    }

    @Public()
    @ApiOperation({ summary: 'Find all transfers' })
    @Get(':transferId')
    async getTransferById(@Param('transferId') transferId: string): Promise<Transfers> {
        return this.TransfersService.findOne(transferId);
    }

    @Public()
    @ApiOperation({ summary: 'Find all transfers by sender account number' })
    @Get('account/sender/:senderAccountNumber')
    async getTransfersByAccountNumber(@Param('senderAccountNumber') accountNumber: string): Promise<Transfers[]> {
        return this.TransfersService.findBySenderAccountNumber(accountNumber);
    }

    @Public()
    @ApiOperation({ summary: 'Find all transfers by receiver account number' })
    @Get('account/receiver/:receiverAccountNumber')
    async getTransfersByReceiverAccountNumber(@Param('receiverAccountNumber') accountNumber: string): Promise<Transfers[]> {
        return this.TransfersService.findByReceiverAccountNumber(accountNumber);
    }

}
