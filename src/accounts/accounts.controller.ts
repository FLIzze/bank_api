import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountsDto } from './dto/create-accounts.dto';
import { Accounts } from './interfaces/accounts.interface';
import { Public } from 'src/auth/public-strategy';
import { ApiOperation } from '@nestjs/swagger';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly AccountsService: AccountsService) {}

    @Public()
    @ApiOperation({ summary: 'Create an account' })
    @Post()
    async create(@Body() CreateAccountsDto: CreateAccountsDto) {
        return this.AccountsService.create(CreateAccountsDto);
    }

    @Public()
    @ApiOperation({ summary: 'Get all accounts' })
    @Get()
    async findAll(): Promise<Accounts[]> {
        return this.AccountsService.findAll();
    }

    @Public()
    @ApiOperation({ summary: 'Get an account by account number' })
    @Get(':accountNumber')
    async findOne(@Param('accountNumber') accountNumber: string): Promise<Accounts> {
        return this.AccountsService.findOne(accountNumber);
    }
    
    @Public()
    @ApiOperation({ summary: 'Get all accounts by client ID' })
    @Get('/client/:clientId')
    async findAllByClientId(@Param('clientId') clientId: string): Promise<Accounts[]> {
        return this.AccountsService.findAllByClientId(clientId);
    }

    @Public()
    @ApiOperation({ summary: 'Update an account' })
    @Put(':accountNumber')
    async update(@Param('accountNumber') accountNumber: string, @Body() CreateAccountsDto: CreateAccountsDto) {
        return this.AccountsService.update(accountNumber, CreateAccountsDto);
    }

    @Public()
    @ApiOperation({ summary: 'Delete an account' })
    @Delete(':accountNumber')
    async delete(@Param('accountNumber') accountNumber: string) {
        return this.AccountsService.delete(accountNumber);
    }

    @Public()
    @ApiOperation({ summary: 'Get account balance by account number' })
    @Get(':accountNumber/balance')
    async findBalance(@Param('accountNumber') accountNumber: string) {
        return this.AccountsService.findBalance(accountNumber);
    }
}
