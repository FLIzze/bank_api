import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { Model } from 'mongoose';
import { Notifications } from './interfaces/notifications.interface';

describe('NotificationsService', () => {
    let service: NotificationsService;
    let model: Model<Notifications>;

    const mockNotificationModel = {
        create: jest.fn(),
        findOne: jest.fn(),
        findOneAndUpdate: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationsService,
                {
                    provide: 'NOTIFICATIONS_MODEL',
                    useValue: mockNotificationModel,
                },
            ],
        }).compile();

        service = module.get<NotificationsService>(NotificationsService);
        model = module.get<Model<Notifications>>('NOTIFICATIONS_MODEL');
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});