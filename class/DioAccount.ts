export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount
    }
  }

  withdraw = (amount: number): void => {
    try {
      this.validateStatus()
      if (amount > this.balance) return
      this.balance -= amount
    } catch (error) {
      console.log("Não é possível realizar saque em contas inválidas")
      return
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }

  setStatus = (newStatus: boolean): void => {
    this.status = newStatus
  }
}
