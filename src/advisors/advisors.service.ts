import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Advisors } from './interfaces/advisors.interface';

@Injectable()
export class AdvisorsService {
    constructor( 
        @Inject('ADVISORS_MODEL') private advisorModel: Model<Advisors>,
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

    async update(advisorId: string, createAdvisorDto: Advisors): Promise<Advisors> {
        return this.advisorModel.findOneAndUpdate({advisorId}, createAdvisorDto, {new:true}).exec();
    }

    async delete(advisorId: string): Promise<Advisors> {
        return this.advisorModel.findOneAndDelete({advisorId}).exec();
    }

    async findClients(advisorId: string): Promise<Advisors> {
        return this.advisorModel.findOne({advisorId}).populate('clients').exec();
    }
}
