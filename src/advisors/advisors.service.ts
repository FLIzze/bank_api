import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Advisors } from './interfaces/advisors.interface';
import { CreateAdvisorsDto } from './dto/create-advisors.dto';
import { ClientsService } from '../clients/clients.service';

@Injectable()
export class AdvisorsService {

    constructor( 
        @Inject('ADVISORS_MODEL') private advisorModel: Model<Advisors>,
        private clientService: ClientsService,
    ) {}

    async create(createAdvisorDto: Advisors): Promise<Advisors> {
        const createdAdvisor = new this.advisorModel(createAdvisorDto);
        return createdAdvisor.save();
    }

    async findAll(): Promise<Advisors[]> {
        return this.advisorModel.find().exec();
    }

    async findOne(advisorId: string): Promise<Advisors> {
        return this.advisorModel.findById(advisorId).exec();
    }

    async update(advisorId: string, createAdvisorDto: CreateAdvisorsDto): Promise<Advisors> {
        return this.advisorModel.findOneAndUpdate({_id: advisorId}, createAdvisorDto, {new:true}).exec();
    }

    async delete(advisorId: string): Promise<Advisors> {
        return this.advisorModel.findOneAndDelete({_id: advisorId}).exec();
    }

    async findClients(advisorId: string): Promise<any> {
        const advisor = await this.advisorModel.findOne({ _id: advisorId }).exec();
        const clientIds = advisor?.managedClients || [];
    
        const clients = await Promise.all(clientIds.map(id => this.clientService.findOne(id)));

        return { advisor, clients };
    }
}
