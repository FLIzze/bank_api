import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { createNotificationsDto } from './dto/create-notifications.dto';
import { Notifications } from './interfaces/notifications.interface';

describe('NotificationsController', () => {
    let controller: NotificationsController;
    let service: NotificationsService;

    const mockNotification: Notifications = {
        clientId: '1',
        title: 'New message',
        content: 'You have a new message from your advisor.',
        type: 'Message',
        sentDate: new Date('2021-03-09T00:00:00Z'),
        isRead: false,
    };

    const mockNotificationsService = {
        create: jest.fn().mockResolvedValue(mockNotification),
        findOne: jest.fn().mockResolvedValue(mockNotification),
        update: jest.fn().mockResolvedValue({ ...mockNotification, isRead: true }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [NotificationsController],
            providers: [
                {
                    provide: NotificationsService,
                    useValue: mockNotificationsService,
                },
            ],
        }).compile();

        controller = module.get<NotificationsController>(NotificationsController);
        service = module.get<NotificationsService>(NotificationsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a new notification and return it', async () => {
            const createDto: createNotificationsDto = {
                clientId: '1',
                title: 'New message',
                content: 'You have a new message from your advisor.',
                type: 'Message',
                sentDate: new Date('2021-03-09T00:00:00Z'),
                isRead: false,
            };

            const result = await controller.create(createDto);
            expect(result).toEqual(mockNotification);
            expect(service.create).toHaveBeenCalledWith(createDto);
        });
    });

    describe('findOne', () => {
        it('should return a notification by client ID', async () => {
            const clientId = '1';
            const result = await controller.findOne(clientId);
            expect(result).toEqual(mockNotification);
            expect(service.findOne).toHaveBeenCalledWith(clientId);
        });
    });

    describe('update', () => {
        it('should update a notification and return the updated notification', async () => {
            const clientId = '1';
            const updateNotification: Notifications = {
                ...mockNotification,
                isRead: true,
            };

            const result = await controller.update(clientId, updateNotification);
            expect(result).toEqual({ ...mockNotification, isRead: true });
            expect(service.update).toHaveBeenCalledWith(clientId, updateNotification);
        });
    });
});
