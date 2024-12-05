export class CreateLoansDto {
    readonly clientId: string;
    readonly amount: number;
    readonly interestRate: number;
    readonly startDate: Date;
    readonly endDate: Date;
    readonly monthlyPayment: number;
    readonly remainingBalance: number;
    readonly status: string;
}
