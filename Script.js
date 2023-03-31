// BANK ACCOUNT
// const account = {

var account = {
    accountName: "Khalil Maleki , 19973243-4430",
    balance: 1500,
    getBalance: function () {
        alert("Ditt saldo är: " + this.balance);
    },

    deposit: function () {
        let increaseBalance = parseFloat(prompt("Hur mycket vill du sätta in? "));
        if ((increaseBalance <= 0) || (increaseBalance === NaN) || (isNaN(increaseBalance))) {
            this.accountError();
            this.deposit();
        }
        else {
            this.balance = increaseBalance + this.balance;
            alert("Ditt nya saldo är: " + this.balance);
        }

    },
    withdrawal: function () {
        let reduceBalance = parseFloat(prompt("Hur mycket skulle du vilja ta ut? "));
        if ((reduceBalance <= 0) || (reduceBalance === NaN) || (isNaN(reduceBalance))) {
            this.accountError();
            this.withdrawal();
        }
        else if (reduceBalance > this.balance) {
            alert("Ber om ursäkt. Du har inte tillräckligt med pengar. Vill du låna några? ")
            this.withdrawal();
        }
        else {
            this.balance = this.balance - reduceBalance;
            alert("Ditt nya saldo är: " + this.balance);
        }
    },
    getAccountName: function () {
        alert("Namn på bankkonto: " + this.accountName);
    },
    accountError: function () {
        alert("Var snäll ange bara ett positivt tal: ");
    },
    exitAccount: function () {
        alert("Hejdå, tack för ditt besök. Vi hoppas att vi ses igen!");
    },
}

function atm() {
    let choice = 0;

    while (choice != 5) {
        choice = parseInt(prompt("Select a choice: 1. ) See balance. 2. ) Make a deposit. 3. ) Make a withdrawal. 4. ) Get account name. 5. ) Exit"));

        if (choice === 1) {
            account.getBalance()
        }

        else if (choice === 2) {
            account.deposit()
        }

        else if (choice === 3) {
            account.withdrawal()
        }

        else if (choice === 4) {
            account.getAccountName()
        }

        else if (choice === 5) {
            account.exitAccount()
        }

        else {
            alert("Detta är inte en giltig alternativ. Om du vill avsluta, gå tillbaka och ange nummer 5.");
        }
    }
}
atm();