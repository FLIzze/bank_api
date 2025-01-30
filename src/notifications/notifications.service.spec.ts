import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { Model } from 'mongoose';
import { Notifications } from './interfaces/notifications.interface';

describe('NotificationsService', () => {
    let service: NotificationsService;
    let model: Model<Notifications>;

    const mockNotification: Notifications = {
        clientId: '1',
        title: 'New message',
        content: 'You have a new message from your advisor.',
        type: 'Message',
        sentDate: new Date('2021-03-09T00:00:00Z'),
        isRead: false,
    };

    const mockNotificationModel = {
        create: jest.fn().mockResolvedValue(mockNotification),
        find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockNotification]) }), // Correction ici
        findOneAndUpdate: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockNotification) }),
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

    it('should create a notification', async () => {
        const notificationData = {
            clientId: '1',
            title: 'New message',
            content: 'You have a new message from your advisor.',
            type: 'Message',
            sentDate: new Date('2021-03-09T00:00:00Z'),
            isRead: false,
        };

        const result = await service.create(notificationData);

        expect(result).toEqual(mockNotification);
        expect(mockNotificationModel.create).toHaveBeenCalledWith(notificationData);
    });

    it('should find all notifications by client ID', async () => {
        const clientId = '1';

        const result = await service.findAllByClientId(clientId);

        expect(result).toEqual([mockNotification]);
        expect(mockNotificationModel.find).toHaveBeenCalledWith({ clientId });
    });

    it('should update a notification by client ID', async () => {
        const clientId = '1';
        const updatedNotificationData = {
            clientId: '1',
            title: 'Updated Notification',
            content: 'This is an updated notification.',
            type: 'Alert',
            sentDate: new Date('2021-03-10T00:00:00Z'),
            isRead: true,
        };

        const updatedNotification = { _id: '507f191e810c19729de860ea', ...updatedNotificationData };

        (mockNotificationModel.findOneAndUpdate as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(updatedNotification),
        });

        const result = await service.update(clientId, updatedNotificationData);

        expect(result).toEqual(updatedNotification);
        expect(mockNotificationModel.findOneAndUpdate).toHaveBeenCalledWith(
            { _id: clientId },
            updatedNotificationData,
            { new: true }
        );
    });
});
