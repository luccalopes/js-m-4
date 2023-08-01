const App = require('./App')

App.createUser('lucca@email.com', 'Lucca Lopes')
App.createUser('bianca@email.com', 'Bianca Neme')
App.createUser('jairo@email.com', 'Jairo Rodrigues')

App.deposit('lucca@email.com', 100)
App.transfer('lucca@email.com', 'bianca@email.com', 30)
App.changeLoanFee(10)
App.takeLoan('jairo@email.com', 2000, 24)

console.log(App.findUser('lucca@email.com'))
console.log(App.findUser('lucca@email.com').account)
console.log(App.findUser('bianca@email.com'))
console.log(App.findUser('bianca@email.com').account)
console.log(App.findUser('jairo@email.com'))
console.log(App.findUser('jairo@email.com').account)
console.log(App.findUser('jairo@email.com').account.loans[0].installments)