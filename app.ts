import { CompanyAccount } from './class/CompanyAccount'
import { PartnerAccount } from './class/PartnerAccount'
import { PeopleAccount } from './class/PeopleAccount'


// Challenge 1
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(250)
console.log(peopleAccount.getBalance()) // Must be 250

peopleAccount.withdraw(50)
console.log(peopleAccount.getBalance()) // Must be 200

peopleAccount.setStatus(false)
peopleAccount.withdraw(50)
console.log(peopleAccount.getBalance()) // Must still be 200, because with status false, it can't withdraw

peopleAccount.setStatus(true)
peopleAccount.deposit(100)
console.log(peopleAccount.getBalance()) // Must be 300, because now it is able to deposit, as the status was set to true

// Challenge 2
const companyAccount = new CompanyAccount('Empresa LTDA', 2)
companyAccount.getLoan(2500)
console.log(companyAccount.getBalance())

companyAccount.setStatus(false)
companyAccount.getLoan(2500)
console.log(companyAccount.getBalance()) // It will keep being 2500, because with status false it won't be able to get the loan

//Challenge 3
const partnerAccount = new PartnerAccount('Parceiro da DIO', 3)
partnerAccount.deposit(250)
console.log(partnerAccount.getBalance()) // It will be 260, because parterns recieve a bonus of 10 when deposit

//Challenge 6
const newPartnerAcconut = new PartnerAccount('Parceiro da DIO', 3)
newPartnerAcconut.deposit(200)
newPartnerAcconut.getBalance()
newPartnerAcconut.getName()
newPartnerAcconut.setBalance(250)
newPartnerAcconut.withdraw(250)
newPartnerAcconut.validateStatus()
newPartnerAcconut.setStatus(false)

const newCompanyAccount = new CompanyAccount('Company LTD', 5)
newCompanyAccount.deposit(250)
newCompanyAccount.getBalance()
newCompanyAccount.getLoan(2120)
newCompanyAccount.getName()
newCompanyAccount.setBalance(150)
newCompanyAccount.setStatus(true)
newCompanyAccount.validateStatus()
newCompanyAccount.withdraw(250)

const newPeopleAccount = new PeopleAccount(123456789101, 'People', 10)
newPeopleAccount.deposit(250)
newPeopleAccount.getBalance()
newPeopleAccount.getName()
newPeopleAccount.setBalance(150)
newPeopleAccount.setStatus(true)
newPeopleAccount.validateStatus()
newPeopleAccount.withdraw(250)
