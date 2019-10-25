import React, { Component } from 'react';
import v4 from 'uuid/v4';
import Controls from './Controls';
import Balance from './Balance';
import TransactionHistory from './TransactionHistory';
import style from './Dashboard.module.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      balance: 0,
      income: 0,
      expenses: 0,
    };
  }

  addTransactions = transaction => {
    const calculation =
      transaction.type === 'Deposit'
        ? this.state.balance + Number(transaction.amount)
        : this.state.balance - Number(transaction.amount);

    if (transaction.type === 'Deposit') {
      this.setState(state => ({
        income: state.income + Number(transaction.amount),
      }));
    } else {
      this.setState(state => ({
        expenses: state.expenses + Number(transaction.amount),
      }));
    }

    const date = new Date();

    this.loginlnputld = v4();

    const transactionToAdd = {
      ...transaction,
      id: this.loginlnputld,
      date: date.toLocaleString(),
    };

    this.setState(state => ({
      transactions: [...state.transactions, transactionToAdd],
      balance: calculation,
    }));
  };

  render() {
    const { balance } = this.state;
    const { income } = this.state;
    const { expenses } = this.state;
    const { transactions } = this.state;

    return (
      <>
        <Controls
          style={style}
          addTransactions={this.addTransactions}
          balance={balance}
        />
        <Balance
          style={style}
          balance={balance}
          income={income}
          expenses={expenses}
        />
        <TransactionHistory style={style} transactions={transactions} />
      </>
    );
  }
}

export default Dashboard;
