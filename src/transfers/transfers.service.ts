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
    return this.transfersModel.create(createTransferDto)
  }

  async findAll(): Promise<Transfers[]> {
    return this.transfersModel.find().exec();
  }

  async findOne(transferId: string): Promise<Transfers> {
    return this.transfersModel.findById(transferId).exec();
  }

  async findByAccountNumber(accountNumber: string): Promise<Transfers[]> {
    return this.transfersModel.find({
      $or: [{ fromAccount: accountNumber }, { toAccount: accountNumber }]
    }).exec();
  }
}
