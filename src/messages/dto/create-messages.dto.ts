import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsString } from "class-validator";

export class CreateMessagesDto {
    @ApiProperty({
        description: 'Message ID',
        example: '1'
    })
    @IsString()
    readonly clientId: string;

    @ApiProperty({
        description: 'Advisor ID',
        example: '1'
    })
    @IsString()
    readonly advisorId: string;

    @ApiProperty({
        description: 'Message content',
        example: 'Hello, I would like to know more about the services you offer.'
    })
    @IsString()
    readonly content: string;

    @ApiProperty({
        description: 'Message sent date',
        example: '2021-03-09T00:00:00Z'
    })
    @IsDate()
    readonly sentDate: Date;

    @ApiProperty({
        description: 'Message read status',
        example: 'true'
    })
    @IsBoolean()
    readonly isRead: boolean;
}
