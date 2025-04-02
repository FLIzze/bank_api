import { UseGuards,Controller, Body, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { BeneficiaryService } from './beneficiary.service';
import { Beneficiary } from './interfaces/beneficiary.interfaces';
import { Public } from '../auth/public-strategy';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('beneficiary')
export class BeneficiaryController {
    constructor(private readonly beneficiaryService: BeneficiaryService) {}

    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Create a beneficiary' })
    @Post()
    async create(@Body() createBeneficiaryDto: CreateBeneficiaryDto) {
        return this.beneficiaryService.create(createBeneficiaryDto);
    }

    @Public()
    @ApiOperation({ summary: 'Find all beneficiaries' })
    @Get()
    async findAll(): Promise<Beneficiary[]> {
        return this.beneficiaryService.findAll();
    }

    @Public()
    @ApiOperation({ summary: 'Find a beneficiary by id' })
    @Get(':beneficiaryId')
    async findOne(@Param('beneficiaryId') beneficiaryId: string): Promise<Beneficiary> {
        return this.beneficiaryService.findOne(beneficiaryId);
    }

    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Update a beneficiary' })
    @Put(':beneficiaryId')
    async update(
        @Param('beneficiaryId') beneficiaryId: string, 
        @Body() createBeneficiaryDto: CreateBeneficiaryDto
    ) {
        return this.beneficiaryService.update(beneficiaryId, createBeneficiaryDto);
    }

    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Delete a beneficiary' })
    @Delete(':beneficiaryId')
    async delete(@Param('beneficiaryId') beneficiaryId: string) {
        return this.beneficiaryService.delete(beneficiaryId);
    }
}
