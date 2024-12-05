import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdvisorsService } from './advisors.service';
import { CreateAdvisorsDto } from './dto/create-advisors.dto';

@Controller('advisors')
export class AdvisorsController {

    constructor(private readonly AdvisorsService: AdvisorsService) {}

    @Post()
    create(@Body() CreateAdvisorsDto: CreateAdvisorsDto) {
        return this.AdvisorsService.create(CreateAdvisorsDto);
    }

    @Get(':advisorId')
    getAdvisor(@Param('advisorId') advisorId: string) {
        return this.AdvisorsService.findOne(advisorId);
    }

    @Get(':advisorId/clients')
    getAdvisorClients(@Param('advisorId') advisorId: string) {
        return this.AdvisorsService.findClients(advisorId);
    }

    @Put(':advisorId')
    updateAdvisor(@Param('advisorId') advisorId: string, @Body() updateAdvisorDto: any) {
        return this.AdvisorsService.update(advisorId, updateAdvisorDto);
    }

    @Delete(':advisorId')
    deleteAdvisor(@Param('advisorId') advisorId: string) {
        return this.AdvisorsService.delete(advisorId);
    }
}
