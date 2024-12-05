import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class CreateBeneficiaryDto {
    @ApiProperty({
        description: 'Client ID',
        example: '1'
    })
    @IsString()
    readonly clientId: string;

    @ApiProperty({
        description: 'Beneficiary name',
        example: 'John Doe'
    })
    @IsString()
    readonly name: string;

    @ApiProperty({
        description: 'Beneficiary account number',
        example: '123456789'
    })
    @IsNumber()
    readonly accountNumber: number;

    @ApiProperty({
        description: 'Beneficiary bank name',
        example: 'Bank of America'
    })
    @IsString()
    readonly bankName: string;

    @ApiProperty({
        description: 'Beneficiary added date',
        example: '2021-09-01'
    })
    @IsDate()
    readonly addedDate: Date;

    @ApiProperty({
        description: 'Beneficiary verification status',
        example: 'true'
    })
    @IsBoolean()
    readonly isVerified: boolean;
}
