import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateAccountsDto {
    @ApiProperty({
        description: 'Client ID',
        example: '1'
    })
    @IsString()
    readonly clientId: string;

    @ApiProperty({
        description: 'Account number',
        example: '1234567890'
    })
    @IsNumber()
    readonly accountNumber: number;

    @ApiProperty({
        description: 'Account balance',
        example: '1000'
    })
    @IsNumber()
    readonly balance: number;

    @ApiProperty({
        description: 'Credit cards linked to the account',
        example: ['1234567890', '0987654321']
    })
    @IsArray()
    @IsString({ each: true })
    readonly creditCards: string[];
  }
