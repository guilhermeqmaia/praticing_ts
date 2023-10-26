import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    try {
      this.validateStatus()
      this.deposit(amount)
    } catch (error) {
      console.log('Não é possível realizar um empréstimo com uma conta inválida')
    }
  }
}
