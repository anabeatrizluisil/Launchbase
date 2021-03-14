const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance = user.balance + transaction.value
    }

    else if (transaction.type == 'debit') {
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type) {
    let higherValue = 0
    let higherTransaction

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    } 

    return higherTransaction
}

function getAverageTransactionValue() {
    let soma = 0

    for (let transaction of user.transactions) {
        soma = soma + transaction.value
    }

    const media = soma / user.transactions.length

    return media
}

function getTransactionsCount() {
    let creditCount = 0
    let debitCount = 0

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            creditCount = creditCount + 1
        }
        else if (transaction.type == 'debit') {
            debitCount = debitCount + 1
        }
    }

    return {credit: creditCount, debit: debitCount}
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }