import {Controller, Body, Get, Post, Param, Put, Delete} from '@nestjs/common';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { BeneficiaryService } from './beneficiary.service';
import { Beneficiary } from './interfaces/beneficiary.interfaces';

@Controller('beneficiary')
export class BeneficiaryController {
    constructor(private readonly beneficiaryService: BeneficiaryService) {}

    @Post()
    async create(@Body() createBeneficiaryDto: CreateBeneficiaryDto) {
        return this.beneficiaryService.create(createBeneficiaryDto);
    }

    @Get()
    async findAll(): Promise<Beneficiary[]> {
        return this.beneficiaryService.findAll();
    }

    @Get(':beneficiaryId')
    async findOne(@Param('beneficiaryId') beneficiaryId: string): Promise<Beneficiary> {
        return this.beneficiaryService.findOne(beneficiaryId);
    }

    @Put(':beneficiaryId')
    async update(
        @Param('beneficiaryId') beneficiaryId: string, 
        @Body() createBeneficiaryDto: CreateBeneficiaryDto
    ) {
        return this.beneficiaryService.update(beneficiaryId, createBeneficiaryDto);
    }

    @Delete(':beneficiaryId')
    async delete(@Param('beneficiaryId') beneficiaryId: string) {
        return this.beneficiaryService.delete(beneficiaryId);
    }
}
