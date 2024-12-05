import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Beneficiary } from './interfaces/beneficiary.interfaces';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';

@Injectable()
export class BeneficiaryService {
    constructor(
        @Inject('BENEFICIARY_MODEL')
        private beneficiaryModel: Model<Beneficiary>
    ) {}

    async create(createBeneficiaryDto: CreateBeneficiaryDto): Promise<Beneficiary> {
        const createdBeneficiary = new this.beneficiaryModel(createBeneficiaryDto);
        return createdBeneficiary.save();
    }

    async findAll(): Promise<Beneficiary[]> {
        return this.beneficiaryModel.find().exec();
    }

    async findOne(beneficiaryId: string): Promise<Beneficiary> {
        return this.beneficiaryModel.findOne({ beneficiaryId }).exec();
    }

    async update(beneficiaryId: string, createBeneficiaryDto: CreateBeneficiaryDto): Promise<Beneficiary> {
        return this.beneficiaryModel.findOneAndUpdate(
            { beneficiaryId },
            createBeneficiaryDto,
            { new: true }
        ).exec();
    }

    async delete(beneficiaryId: string): Promise<Beneficiary> {
        return this.beneficiaryModel.findOneAndDelete({ beneficiaryId }).exec();
    }

    // Ajoutez d'autres méthodes spécifiques si nécessaire
}
