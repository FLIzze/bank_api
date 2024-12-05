import { Connection } from 'mongoose';
import { NotificationsSchema } from './schemas/notifications.schema';

export const NotificationsProviders = [
    {
        provide: 'NOTIFICATIONS_MODEL',
        useFactory: (connection: Connection) =>
        connection.model('Notifications', NotificationsSchema),
        inject: ['BANK'],
    },
];
