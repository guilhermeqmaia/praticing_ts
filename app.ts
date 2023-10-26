import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'


// Challenge 1
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(250)
console.log(peopleAccount.balance) // Must be 250

peopleAccount.withdraw(50)
console.log(peopleAccount.balance) // Must be 200

peopleAccount.setStatus(false)
peopleAccount.withdraw(50)
console.log(peopleAccount.balance) // Must still be 200, because with status false, it can't withdraw

peopleAccount.setStatus(true)
peopleAccount.deposit(100)
console.log(peopleAccount.balance) // Must be 300, because now it is able to deposit, as the status was set to true

// Challenge 2
const companyAccount = new CompanyAccount('Empresa LTDA', 2)
companyAccount.getLoan(2500)
console.log(companyAccount.balance)

companyAccount.setStatus(false)
companyAccount.getLoan(2500)
console.log(companyAccount.balance) // It will keep being 2500, because with status false it won't be able to get the loan
