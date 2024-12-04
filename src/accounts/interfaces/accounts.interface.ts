import { Creditcards } from '../../creditcards/interfaces/creditcards.interface';

export interface Accounts {
  clientId: string;
  accountNumber: number;
  balance: number;
  creditCards: Creditcards[];
}
