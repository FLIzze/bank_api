import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Notifications } from './interfaces/notifications.interface';

@Injectable()
export class NotificationsService {
    constructor(
        @Inject('NOTIFICATIONS_MODEL') private notificationModel: Model<Notifications>,
    ) {}

    async create(notification: Notifications): Promise<Notifications> {
        const createdNotification = new this.notificationModel(notification);
        return createdNotification.save();
    }

    async findOne(clientId: string): Promise<Notifications> {
        return this.notificationModel.findOne({ clientId });
    }

    async update(clientId: string, notification: Notifications): Promise<Notifications> {
        return this.notificationModel.findOneAndUpdate({ clientId }, notification, { new: true }).exec();
    }
}
