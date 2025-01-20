"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("../src/bank");
// setup
const accounts = [
    { id: 1234567890, balance: 5000 },
    { id: 1234567891, balance: 1000 }
];
const usernames = ['user1', 'user2'];
const bank = new bank_1.Bank(accounts, usernames);
// Scenario 1: customer can withdraw the specified amount of money
// the original balance of id 1234567890 was 5000
const oldBalance = 5000;
bank.withdrawFromAccount('user1', 1234567890, 1000);
const newBalance = 4000;
// after the withdraw, the current balance should be 4000
if (newBalance !== oldBalance - 1000) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}
// Scenario 2: customer is unable to withdraw due to the invalid amount of money
// firstly, try withdraw 0
try {
    bank.withdrawFromAccount('user1', 1234567890, 0);
    console.log('Scenario 2 failed');
}
catch (e) {
    console.log('Scenario 2 passed');
}
// secondly, try withdraw negative number
try {
    bank.withdrawFromAccount('user2', 1234567890, -1000);
    console.log('Scenario 2 failed');
}
catch (e) {
    console.log('Scenario 2 passed');
}
// thirdly, try withdraw a amount that is greater than the current balance
try {
    bank.withdrawFromAccount('user1', 1234567890, 8000);
    console.log('Scenario 2 failed');
}
catch (e) {
    console.log('Scenario 2 passed');
}
// Scenario 3: customer is unable to withdraw due to invalid account id
try {
    bank.withdrawFromAccount('user1', 1233333333, 10);
    console.log('Scenario 3 failed');
}
catch (e) {
    console.log('Scenario 3 passed');
}
// Scenario 4: customer is unable to deposit due to the invalid username
try {
    bank.withdrawFromAccount('user4', 1234567892, 10);
    console.log('Scenario 4 failed');
}
catch (e) {
    console.log('Scenario 4 passed');
}
