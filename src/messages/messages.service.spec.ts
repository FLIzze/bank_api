import { Test, TestingModule } from '@nestjs/testing';
import { MessagesService } from './messages.service';
import { Model } from 'mongoose';
import { Messages } from './interfaces/messages.interface';
import { CreateMessagesDto } from './dto/create-messages.dto';

describe('MessagesService', () => {
    let service: MessagesService;
    let model: Model<Messages>;

    const mockMessage: Messages = {
        clientId: '1',
        advisorId: 1,
        content: 'Hello, I would like to know more about the services you offer.',
        sentDate: new Date('2021-03-09T00:00:00Z'),
        isRead: false,
    };

    const mockMessagesModel = {
        create: jest.fn().mockResolvedValue(mockMessage),
        find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockMessage]) }),
        findByIdAndUpdate: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockMessage) }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MessagesService,
                {
                    provide: 'MESSAGES_MODEL',
                    useValue: mockMessagesModel,
                },
            ],
        }).compile();

        service = module.get<MessagesService>(MessagesService);
        model = module.get<Model<Messages>>('MESSAGES_MODEL');
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a message', async () => {
        const messageData: CreateMessagesDto = {
            clientId: '1',
            advisorId: '1',
            content: 'Hello, I would like to know more about the services you offer.',
            sentDate: new Date('2021-03-09T00:00:00Z'),
            isRead: false,
        };

        const result = await service.create(messageData);

        expect(result).toEqual(mockMessage);
        expect(mockMessagesModel.create).toHaveBeenCalledWith(messageData);
    });

    it('should find messages by client ID', async () => {
        const clientId = '1';

        const result = await service.findByClient(clientId);

        expect(result).toEqual([mockMessage]);
        expect(mockMessagesModel.find).toHaveBeenCalledWith({ clientId });
    });

    it('should find messages by advisor ID', async () => {
        const advisorId = '1';

        const result = await service.findByAdvisor(advisorId);

        expect(result).toEqual([mockMessage]);
        expect(mockMessagesModel.find).toHaveBeenCalledWith({ advisorId });
    });

    it('should update a message', async () => {
        const messageId = '507f191e810c19729de860ea';
        const updatedMessageData: CreateMessagesDto = {
            clientId: '1',
            advisorId: '1',
            content: 'Updated message content',
            sentDate: new Date('2021-03-10T00:00:00Z'),
            isRead: true,
        };

        const updatedMessage = { _id: messageId, ...updatedMessageData };

        (mockMessagesModel.findByIdAndUpdate as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(updatedMessage),
        });

        const result = await service.update(messageId, updatedMessageData);

        expect(result).toEqual(updatedMessage);
        expect(mockMessagesModel.findByIdAndUpdate).toHaveBeenCalledWith(
            messageId,
            updatedMessageData,
            { new: true }
        );
    });
});
