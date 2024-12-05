import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdvisorsService } from './advisors.service';
import { CreateAdvisorsDto } from './dto/create-advisors.dto';

@Controller('advisors')
export class AdvisorsController {

    constructor(private readonly AdvisorsService: AdvisorsService) {}

    @Post()
    async create(@Body() CreateAdvisorsDto: CreateAdvisorsDto) {
        return this.AdvisorsService.create(CreateAdvisorsDto);
    }

    @Get(':advisorId')
    async findOne(@Param('advisorId') advisorId: string) {
        return this.AdvisorsService.findOne(advisorId);
    }

    @Get(':advisorId/clients')
    async findClients(@Param('advisorId') advisorId: string) {
        return this.AdvisorsService.findClients(advisorId);
    }

    @Put(':advisorId')
    async update(@Param('advisorId') advisorId: string, @Body() updateAdvisorDto: any) {
        return this.AdvisorsService.update(advisorId, updateAdvisorDto);
    }

    @Delete(':advisorId')
    async delete(@Param('advisorId') advisorId: string) {
        return this.AdvisorsService.delete(advisorId);
    }
}
