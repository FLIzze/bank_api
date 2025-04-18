import { UseGuards, Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdvisorsService } from './advisors.service';
import { CreateAdvisorsDto } from './dto/create-advisors.dto';
import { Public } from '../auth/public-strategy';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('advisors')
export class AdvisorsController {

    constructor(private readonly AdvisorsService: AdvisorsService) {}

    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Create an advisor' })
    @Post()
    async create(@Body() CreateAdvisorsDto: CreateAdvisorsDto) {
        return this.AdvisorsService.create(CreateAdvisorsDto);
    }

    @Public()
    @ApiOperation({ summary: 'Get advisors by id' })
    @Get(':advisorId')
    async findOne(@Param('advisorId') advisorId: string) {
        return this.AdvisorsService.findOne(advisorId);
    }

    @Public()
    @ApiOperation({ summary: 'Get all advisors clients' })
    @Get(':advisorId/clients')
    async findClients(@Param('advisorId') advisorId: string) {
        return this.AdvisorsService.findClients(advisorId);
    }

    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Update an advisor' })
    @Put(':advisorId')
    async update(@Param('advisorId') advisorId: string, @Body() CreateAdvisorsDto: CreateAdvisorsDto) {
        return this.AdvisorsService.update(advisorId, CreateAdvisorsDto);
    }

    @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Delete an advisor' })
    @Delete(':advisorId')
    async delete(@Param('advisorId') advisorId: string) {
        return this.AdvisorsService.delete(advisorId);
    }
}
