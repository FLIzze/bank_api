import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateCreditCardsDto {
    @ApiProperty({
        description: 'Identifiant du compte',
        example: '6750caa88f05311c5b33c3f4'
    })
    @IsString()
    readonly accountId: string;

    @ApiProperty({
        description: 'Numéro de carte',
        example: '1234567891234567'
    })
    @IsNumber()
    readonly cardNumber: number;

    @ApiProperty({
        description: 'Code de sécurité de la carte',
        example: '123'
    })
    @IsNumber()
    readonly ccv: number;

    @ApiProperty({
        description: 'Date d\'expiration de la carte',
        example: '2024-08-01T00:00:00Z'
    })
    @IsDate()
    @Type(() => Date)
    readonly expirationDate: Date;

    @ApiProperty({
        description: 'Type de carte',
        example: 'Visa'
    })
    @IsString()
    readonly type: string;

    @ApiProperty({
        description: 'Statut de la carte',
        example: 'Active'
    })
    @IsString()
    readonly status: string;
}