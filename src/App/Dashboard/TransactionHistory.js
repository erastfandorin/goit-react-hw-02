import React from 'react';

const TransactionHistory = ({ style, transactions }) => {
  return (
    transactions.length > 0 && (
      <table className={style.transactionHistory}>
        <thead className={style.thead}>
          <tr>
            <th className={style.td}>Type</th>
            <th className={style.td}>Amount</th>
            <th className={style.td}>Currency</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {transactions.map(item => (
            <tr key={item.id}>
              <td className={style.td}>{item.type}</td>
              <td className={style.td}>{item.amount}$</td>
              <td className={style.td}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

export default TransactionHistory;
