export interface CreateBeneficiaryDto {
    readonly clientId: string;
    readonly name: string;
    readonly accountNumber: number;
    readonly bankName: string;
    readonly addedDate: Date;
    readonly isVerified: boolean;
  }