import { DioAccount } from "./DioAccount";

export class PartnerAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (amount: number): void => {
        this.balance = amount + 10
    }
}