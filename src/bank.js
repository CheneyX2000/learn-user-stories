"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
/**
 * This class implements a bank that can
 * maintain accounts and create new accounts
 */
class Bank {
    /**
     * The constructor initialized the bank with accounts and usernames
     * @param accounts - array of accounts
     * @param usernames - array of usernaes
     */
    constructor(accounts, usernames) {
        this.accounts = [];
        this.usernames = [];
        this.accounts = accounts;
        this.usernames = usernames;
    }
    /**
     *
     * @param id - account id
     * @returns - turn if account id exists, false otherwise
     */
    findAccountById(id) {
        return this.accounts.find(account => account.id === id);
    }
    /**
     *
     * @param accountNumber - the account number
     * @returns true if account length is 10
     */
    isAccountNumberInvalid(accountNumber) {
        return accountNumber.toString().length !== 10;
    }
    /**
     *
     * @param username - the username as a string
     * @returns true if the input username exists in the usernames array of this
     */
    isUsernameExists(username) {
        return this.usernames.includes(username);
    }
    /**
     * The createAccount method creates an new account and returns it
     * @param username
     * @param age
     * @param accountNumber
     * @returns a new account with a ten-digit unique id and zero balance
     */
    createAccount(username, age, accountNumber) {
        if (this.isAccountNumberInvalid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if (!this.isUsernameExists(username)) {
            throw new Error('User not found');
        }
        if (age < 18) {
            throw new Error('User is under 18');
        }
        if (this.findAccountById(accountNumber)) {
            throw new Error('Account already exists');
        }
        const account = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }
}
exports.Bank = Bank;
