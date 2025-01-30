import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { CreateMessagesDto } from './dto/create-messages.dto';
import { Messages } from './interfaces/messages.interface';

describe('MessagesController', () => {
    let controller: MessagesController;
    let service: MessagesService;

    const mockMessage: Messages = {
        clientId: '1',
        advisorId: 2,
        content: 'Hello, I need help with my account.',
        sentDate: new Date('2021-03-09T00:00:00Z'),
        isRead: false,
    };

    const mockMessagesService = {
        create: jest.fn().mockResolvedValue(mockMessage),
        findByClient: jest.fn().mockResolvedValue([mockMessage]),
        findByAdvisor: jest.fn().mockResolvedValue([mockMessage]),
        update: jest.fn().mockResolvedValue({ ...mockMessage, isRead: true }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MessagesController],
            providers: [
                {
                    provide: MessagesService,
                    useValue: mockMessagesService,
                },
            ],
        }).compile();

        controller = module.get<MessagesController>(MessagesController);
        service = module.get<MessagesService>(MessagesService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a new message and return it', async () => {
            const createDto: CreateMessagesDto = {
                clientId: '1',
                advisorId: '2',
                content: 'Hello, I need help with my account.',
                sentDate: new Date('2021-03-09T00:00:00Z'),
                isRead: false,
            };

            const result = await controller.create(createDto);
            expect(result).toEqual(mockMessage);
            expect(service.create).toHaveBeenCalledWith(createDto);
        });
    });

    describe('findByClient', () => {
        it('should return an array of messages by client ID', async () => {
            const clientId = '1';
            const result = await controller.findByClient(clientId);
            expect(result).toEqual([mockMessage]);
            expect(service.findByClient).toHaveBeenCalledWith(clientId);
        });
    });

    describe('findByAdvisor', () => {
        it('should return an array of messages by advisor ID', async () => {
            const advisorId = '2';
            const result = await controller.findByAdvisor(advisorId);
            expect(result).toEqual([mockMessage]);
            expect(service.findByAdvisor).toHaveBeenCalledWith(advisorId);
        });
    });

    describe('update', () => {
        it('should update a message and return the updated message', async () => {
            const messageId = '507f191e810c19729de860ea';
            const updateDto: CreateMessagesDto = {
                clientId: '1',
                advisorId: '2',
                content: 'Hello, I need help with my account.',
                sentDate: new Date('2021-03-09T00:00:00Z'),
                isRead: true,
            };

            const result = await controller.update(messageId, updateDto);
            expect(result).toEqual({ ...mockMessage, isRead: true });
            expect(service.update).toHaveBeenCalledWith(messageId, updateDto);
        });
    });
});
