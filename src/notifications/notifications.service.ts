import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Notifications } from './interfaces/notifications.interface';

@Injectable()
export class NotificationsService {
    constructor(
        @Inject('NOTIFICATIONS_MODEL') private notificationModel: Model<Notifications>,
    ) {}

    async create(notification: Notifications): Promise<Notifications> {
        return this.notificationModel.create(notification);
    }

    async findAllByClientId(clientId: string): Promise<Notifications[]> {
        return this.notificationModel.find({ clientId }).exec();
    }

    async update(notificationId: string, notification: Notifications): Promise<Notifications> {
        return this.notificationModel.findOneAndUpdate({ _id: notificationId }, notification, { new: true }).exec();
    }

    async delete(notificationId: string): Promise<Notifications> {
        return this.notificationModel.findOneAndDelete({ _id: notificationId }).exec();
    }
}
