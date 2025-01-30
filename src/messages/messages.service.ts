import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Messages } from './interfaces/messages.interface';
import { CreateMessagesDto } from './dto/create-messages.dto';

@Injectable()
export class MessagesService {
    constructor(
        @Inject('MESSAGES_MODEL') 
        private readonly messagesModel: Model<Messages>
    ) {}

    async create(CreateMessagesDto:CreateMessagesDto):Promise<Messages> {
        return this.messagesModel.create(CreateMessagesDto)
    }

    async findByClient(clientId: string): Promise<Messages[]> {
        return this.messagesModel.find({ clientId }).exec();
    }

    async findByAdvisor(advisorId: string): Promise<Messages[]> {
        return this.messagesModel.find({ advisorId }).exec();
    }

    async update(messageId: string, CreateMessagesDto: CreateMessagesDto): Promise<Messages> {
        return this.messagesModel.findByIdAndUpdate(messageId, CreateMessagesDto, { new: true }).exec();
    }

    async delete(messageId: string): Promise<Messages> {
        return this.messagesModel.findOneAndDelete({ _id: messageId }).exec();
    }
}
