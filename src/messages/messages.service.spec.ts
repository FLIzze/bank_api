import { Test, TestingModule } from '@nestjs/testing';
import { MessagesService } from './messages.service';
import { Model } from 'mongoose';
import { Messages } from './interfaces/messages.interface';

describe('MessagesService', () => {
    let service: MessagesService;
    let model: Model<Messages>;

    const mockMessagesModel = {
        create: jest.fn(),
        find: jest.fn(),
        findByIdAndUpdate: jest.fn(),
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
});