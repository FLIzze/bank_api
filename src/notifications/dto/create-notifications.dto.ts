export interface Notifications {
    readonly clientId: string;
    readonly title: string;
    readonly content: string;
    readonly type: string;
    readonly sentDate: Date;
    readonly isRead: boolean;
}
