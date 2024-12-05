export class CreateCreditcardsDto {
    readonly accountId: string;
    readonly cardNumber: number;
    readonly ccv: number;
    readonly expirationDate: string;
    readonly type: string;
    readonly status: string;
  }
  