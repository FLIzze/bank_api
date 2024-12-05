export interface Beneficiary {
    readonly clientId: string;
    readonly name: string;
    readonly accountNumber: number;
    readonly bankName: string;
    readonly addedDate: Date;
    readonly isVerified: boolean;
  }