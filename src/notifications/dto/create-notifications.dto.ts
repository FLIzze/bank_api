import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class createNotificationsDto {
    @ApiProperty({
        description: 'Client ID',
        example: '1'
    })
    @IsString()
    readonly clientId: string;

    @ApiProperty({
        description: 'Notification title',
        example: 'New message'
    })
    @IsString()
    readonly title: string;

    @ApiProperty({
        description: 'Notification content',
        example: 'You have a new message from your advisor.'
    })
    @IsString()
    readonly content: string;

    @ApiProperty({
        description: 'Notification type',
        example: 'Message'
    })
    @IsString()
    readonly type: string;

    @ApiProperty({
        description: 'Notification sent date',
        example: '2021-03-09T00:00:00Z'
    })
    @IsString()
    readonly sentDate: Date;

    @ApiProperty({
        description: 'Notification read status',
        example: 'true'
    })
    @IsBoolean()
    readonly isRead: boolean;
}
