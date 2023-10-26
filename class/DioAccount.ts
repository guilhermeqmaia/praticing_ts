export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
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

  getBalance = (): void => {
    console.log(this.balance)
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
