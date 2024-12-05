export class CreateTransfersDto {
    readonly senderAccount: number;
    readonly receiverAccount: number;
    readonly amount: number;
    readonly transferDate: Date;
  }
  