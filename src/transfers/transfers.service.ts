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

  async findOne(transferId: string): Promise<Transfers> {
    return this.transfersModel.findById(transferId).exec();
  }

  async findBySenderAccountNumber(senderAccount: string): Promise<Transfers[]> {
    return this.transfersModel.find({ senderAccount }).exec();
  }

  async findByReceiverAccountNumber(receiverAccount: string): Promise<Transfers[]> {
    return this.transfersModel.find({ receiverAccount }).exec();
  }
}
