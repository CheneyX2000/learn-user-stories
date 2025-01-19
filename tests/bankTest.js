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
// Scenario 1: customer is able to create a new bank account
const acc = bank.createAccount('user1', 20, 1234567892);
if (acc.id !== 1234567892
    || acc.balance !== 0
    || acc.id.toString().length !== 10) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}
try {
    bank.createAccount('user1', 20, 1234567892);
    console.log('Scenario 1 failed');
}
catch (e) {
    console.log('Scenario 1 passed');
}
// Scenario 2: unsuccessful account creation due to customer being below 18
try {
    bank.createAccount('user2', 17, 1234567899);
    console.log('Scenario 2 failed');
}
catch (e) {
    console.log('Scenario 2 passed');
}
// Scenario 3: unsuccessful account creation due to invalid username
try {
    bank.createAccount('user3', 21, 1234567888);
    console.log('Scenario 3 failed');
}
catch (e) {
    console.log('Scenario 3 passed');
}
