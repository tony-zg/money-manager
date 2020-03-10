import React from 'react';
// import { GlobalContext } from '../context/GlobalState';

export const Balance = (props) => {
  // const { transactions } = useContext(GlobalContext);

  const amounts = props.transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4 className="balance">Total Balance</h4>
    <h1 className="moneyBalance">${total}</h1>
    </>
  )
}
