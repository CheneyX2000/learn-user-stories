import {Bank} from '../src/bank';

// setup
const accounts = [
    {id: 1234567890, balance: 5000},
    {id: 1234567891, balance: 1000}];

const usernames = ['user1', 'user2'];
const bank = new Bank(accounts, usernames);
const targetAccount = bank.createAccount('user1', 20, 1234567892);

// Scenario 1: customer is able to deposit into an account

const originalBalance: number = targetAccount.balance;
// the original balance of a new account should be 0
bank.depositIntoAccount('user1', 1234567892, 10);
const newBalance: number =  targetAccount.balance;
// after deposit, the balance should be 10
if (newBalance !== originalBalance + 10) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}

// Scenario 2: customer is unable to deposit because of illegal amount of currency

// firstly, try deposit 0
try {
    bank.depositIntoAccount('user1', 1234567892, 0);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// secondly, try deposit negative number
try {
    bank.depositIntoAccount('user1', 1234567892, -4);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: customer is unable to deposit due to the wrong account id

try {
    bank.depositIntoAccount('user1', 1233333333, 10);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}

// Scenario 4: customer is unable to deposit due to the invalid username

try {
    bank.depositIntoAccount('user4', 1234567892, 10);
    console.log('Scenario 4 failed');
}
catch(e) {
    console.log('Scenario 4 passed');
}