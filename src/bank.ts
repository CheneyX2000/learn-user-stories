import {BankType, AccountType} from './types';

/**
 * This class implements a bank that can
 * maintain accounts and create new accounts
 */

export class Bank implements BankType {
    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     * The constructor initialized the bank with accounts and usernames
     * @param accounts - array of accounts
     * @param usernames - array of usernaes
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * 
     * @param id - account id
     * @returns - turn if account id exists, false otherwise
     */
    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    }

    /**
     * 
     * @param accountNumber - the account number
     * @returns true if account length is 10
     */
    private isAccountNumberInvalid(accountNumber: number): boolean {
        return accountNumber.toString().length !== 10;
    }

    /**
     * 
     * @param username - the username as a string
     * @returns true if the input username exists in the usernames array of this
     */
    private isUsernameExists(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * The createAccount method creates an new account and returns it
     * @param username
     * @param age
     * @param accountNumber
     * @returns a new account with a ten-digit unique id and zero balance
     */
    public createAccount(username: string, age: number, accountNumber: number): AccountType {
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
        const account: AccountType = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }


    /**
     * The depositIntoAccount method find the account and deposit some money into it.
     * @param username the username
     * @param accountNumber the account number
     * @param depositAmount the amount of money to be deposited into account
     */
    public depositIntoAccount(username: string, accountNumber: number, depositAmount: number): void{
        const targetAccount: AccountType | undefined = this.findAccountById(accountNumber);
        
        if (!targetAccount) {
            throw new Error('Invalid account number');
        }
        if (!this.isUsernameExists(username)) {
            throw new Error('User not found');
        }
        if (depositAmount <= 0) {
            throw new Error('Deposit amount cannot be less than or equal to 0');
        }
        
        targetAccount.balance += depositAmount;
    }

    /**
     * The withdrawFromAccount withdraws a specified amount of money from an account
     * @param username the username
     * @param accountNumber the account number
     * @param withdrawAmount the amount of money to be withdrawn
     */
    withdrawFromAccount(username: string, accountNumber: number, withdrawAmount: number): void {
        const targetAccount: AccountType | undefined = this.findAccountById(accountNumber);
        
        if (!targetAccount) {
            throw new Error('Invalid account number');
        }
        if (!this.isUsernameExists(username)) {
            throw new Error('User not found');
        }
        if (withdrawAmount <= 0 || withdrawAmount > targetAccount.balance) {
            throw new Error('Withdraw amount cannot be less than or equal to 0 or greater than the current balance');
        }

        targetAccount.balance -= withdrawAmount;
    }

    /**
     * The checkBalance check the balance of an account.
     * @param username the username
     * @param accountNumber the account number
     * @returns a number representing the current balance of the account.
     */
    checkBalance(username: string, accountNumber: number): number {
        const targetAccount: AccountType | undefined = this.findAccountById(accountNumber);
        
        if (!targetAccount) {
            throw new Error('Invalid account number');
        }
        if (!this.isUsernameExists(username)) {
            throw new Error('User not found');
        }

        return targetAccount.balance
    }
}