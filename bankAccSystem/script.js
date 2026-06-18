// ===== Bank Account System =====

class BankAccount {
  #balance; // private field — cannot be accessed from outside the class

  // Part 1: Constructor receives owner name and initial balance
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  // Part 2 + Part 4: deposit with validation
  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.#balance += amount;
  }

  // Part 2 + Part 4: withdraw with validation
  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive.");
      return;
    }
    if (amount > this.#balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.#balance -= amount;
  }

  // Part 2: return the current balance
  getBalance() {
    return this.#balance;
  }
}

// ===== Part 3: Identify the problem (now fixed by encapsulation) =====
const account = new BankAccount("Ali", 100);

account.withdraw(150);              // "Insufficient funds." — blocked
console.log(account.getBalance());  // 100 (unchanged)

// ===== Part 4: Validation in action =====
account.deposit(-50);               // "Deposit amount must be positive." — blocked
console.log(account.getBalance());  // 100

account.deposit(50);                // allowed
console.log(account.getBalance());  // 150

account.withdraw(30);               // allowed
console.log(account.getBalance());  // 120

// ===== Part 5: Prevent direct manipulation =====
account.balance = -1000;            // creates a useless public property, ignored
console.log(account.getBalance());  // 120 — the real balance is protected