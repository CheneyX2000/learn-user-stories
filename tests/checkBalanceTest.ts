import {Bank} from '../src/bank';

// setup
const accounts = [
    {id: 1234567890, balance: 5000},
    {id: 1234567891, balance: 1000}];

const usernames = ['user1', 'user2'];
const bank = new Bank(accounts, usernames);

// Scenario 1: customer is able to check the current balance

if (bank.checkBalance('user1', 1234567890) !== 5000) {
    console.log('Scenario 1 failed')
}
else {
    console.log('Scenario 1 passed')
}

// Scenario 2: customer is unable to deposit due to the wrong account id

try {
    bank.checkBalance('user1', 1233333333);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: customer is unable to deposit due to the invalid username

try {
    bank.checkBalance('user4', 1234567892);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}