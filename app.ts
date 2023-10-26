import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(250)
console.log(peopleAccount.balance)

peopleAccount.withdraw(50)
console.log(peopleAccount.balance)

peopleAccount.setStatus(false)
peopleAccount.withdraw(50)
console.log(peopleAccount.balance)

peopleAccount.setStatus(true)
peopleAccount.deposit(100)
console.log(peopleAccount.balance)
