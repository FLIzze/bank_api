export interface Loans {
    clientId: string;
    amount: number;
    interestRate: number;
    startDate: Date;
    endDate: Date;
    monthlyPayment: number;
    remainingBalance: number;
    status: string;
}
