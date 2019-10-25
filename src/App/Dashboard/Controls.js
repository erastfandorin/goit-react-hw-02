import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Deposit',
      amount: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDeposit = e => {
    this.setState(
      () => ({
        type: 'Deposit',
      }),
      () => this.handleSubmit(e),
    );
  };

  onWithdraw = e => {
    if (this.props.balance >= Number(this.state.amount)) {
      this.setState(
        () => ({
          type: 'Withdraw',
        }),
        () => this.handleSubmit(e),
      );
    } else {
      toast.error('На счету недостаточно средств для проведения операции!', {
        className: this.props.style.toast,
      });
    }
  };

  handleSubmit = () => {
    if (Number(this.state.amount) === 0) {
      toast.error('Введите сумму для проведения операции!', {
        className: this.props.style.toast,
      });
    } else {
      this.props.addTransactions({ ...this.state });
    }
    this.setState({ amount: '' });
  };

  render() {
    const { style } = this.props;
    const { amount } = this.state;
    return (
      <section className={style.controls}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={style.input}
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
          <button
            className={style.button}
            type="button"
            onClick={this.onDeposit}
          >
            Deposit
          </button>
          <button
            className={style.button}
            type="button"
            onClick={this.onWithdraw}
          >
            Withdraw
          </button>
        </form>
        <ToastContainer />
      </section>
    );
  }
}

Controls.propTypes = {
  style: PropTypes.shape({
    toast: PropTypes.string.isRequired,
    controls: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
  addTransactions: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
};
