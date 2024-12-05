export interface Messages {
    readonly clientId: string;
    readonly advisorId: number;
    readonly content: string;
    readonly sentDate: Date;
    readonly isRead: boolean;
}
