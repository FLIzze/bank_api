import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCreditcardsDto {
    @ApiProperty({
        description: 'Account ID',
        example: '1'
    })
    @IsString()
    readonly accountId: string;

    @ApiProperty({
        description: 'Credit card number',
        example: '1234567890'
    })
    @IsString()
    readonly cardNumber: number;

    @ApiProperty({
        description: 'Credit card CCV',
        example: '123'
    })
    @IsNumber()
    readonly ccv: number;

    @ApiProperty({
        description: 'Credit card expiration date',
        example: '2023-03-09T00:00:00Z'
    })
    @IsString()
    readonly expirationDate: Date;

    @ApiProperty({
        description: 'Credit card type',
        example: 'Visa'
    })
    @IsString()
    readonly type: string;

    @ApiProperty({
        description: 'Credit card status',
        example: 'Active'
    })
    @IsString()
    readonly status: string;
  }
  
