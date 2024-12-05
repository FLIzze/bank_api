import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateLoansDto {
    @ApiProperty({
        description: 'Client ID',
        example: '1'
    })
    @IsString()
    readonly clientId: string;

    @ApiProperty({
        description: 'Loan amount',
        example: '1000'
    })
    @IsNumber()
    readonly amount: number;

    @ApiProperty({
        description: 'Loan interest rate',
        example: '0.05'
    })
    @IsNumber()
    readonly interestRate: number;

    @ApiProperty({
        description: 'Loan start date',
        example: '2021-03-09T00:00:00Z'
    })
    @IsDate()
    readonly startDate: Date;

    @ApiProperty({
        description: 'Loan end date',
        example: '2023-03-09T00:00:00Z'
    })
    @IsDate()
    readonly endDate: Date;

    @ApiProperty({
        description: 'Loan monthly payment',
        example: '100'
    })
    @IsNumber()
    readonly monthlyPayment: number;
    
    @ApiProperty({
        description: 'Loan remaining balance',
        example: '500'
    })
    @IsNumber()
    readonly remainingBalance: number;

    @ApiProperty({
        description: 'Loan status',
        example: 'Active'
    })
    @IsString()
    readonly status: string;
}
