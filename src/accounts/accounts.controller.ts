import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountsDto } from './dto/create-accounts.dto';
import { Accounts } from './interfaces/accounts.interface';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly AccountsService: AccountsService) {}

    @Post()
    async create(@Body() CreateAccountsDto: CreateAccountsDto) {
        return this.AccountsService.create(CreateAccountsDto);
    }

    @Get()
    async findAll(): Promise<Accounts[]> {
        return this.AccountsService.findAll();
    }

    @Get(':clientId')
    async findOne(@Param('clientId') clientId: string): Promise<Accounts> {
        return this.AccountsService.findOne(clientId);
    }

    @Put(':clientId')
    async update(
        @Param('clientId') clientId: string, 
        @Body() CreateAccountsDto: CreateAccountsDto
    ) {
        return this.AccountsService.update(clientId, CreateAccountsDto);
    }

    @Delete(':clientId')
    async delete(@Param('clientId') clientId: string) {
        return this.AccountsService.delete(clientId);
    }

    @Get(':clientId/balance')
    async findBalance(@Param('clientId') clientId: string) {
        return this.AccountsService.findBalance(clientId);
    }
}
