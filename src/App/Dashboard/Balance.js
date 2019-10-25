import React from 'react';
import PropTypes from 'prop-types';

const Balance = ({ style, balance, income, expenses }) => (
  <section className={style.balance}>
    <span>⬆{income}$</span>
    <span>⬇{expenses}$</span>
    <span>Balance: {balance}$</span>
  </section>
);

export default Balance;

Balance.propTypes = {
  style: PropTypes.shape({
    balance: PropTypes.string.isRequired,
  }).isRequired,
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};
