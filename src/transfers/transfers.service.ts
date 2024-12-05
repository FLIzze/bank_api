import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Transfers } from './interfaces/transfers.interfaces';
import { CreateTransfersDto } from './dto/create-transfers.dto';

@Injectable()
export class TransfersService {
  constructor(
    @Inject('TRANSFERS_MODEL') private transfersModel: Model<Transfers>,
  ) {}

  async create(createTransferDto: CreateTransfersDto): Promise<Transfers> {
    const createdTransfer = new this.transfersModel(createTransferDto);
    return createdTransfer.save();
  }

  async findAll(): Promise<Transfers[]> {
    return this.transfersModel.find().exec();
  }
}
