import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateTransfersDto {
    @ApiProperty({
        description: 'Sender account',
        example: '1'
    })
    @IsString()
    readonly senderAccount: string;

    @ApiProperty({
        description: 'Receiver account',
        example: '2'
    })
    @IsString()
    readonly receiverAccount: string;

    @ApiProperty({
        description: 'Transfer amount',
        example: '100'
    })
    @IsNumber()
    readonly amount: number;

    @ApiProperty({
        description: 'Transfer date',
        example: '2021-03-09T00:00:00Z'
    })
    @IsDate()
    readonly transferDate: Date;
  }
