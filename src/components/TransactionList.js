import React, { useContext } from 'react';
import { Transaction } from './Transaction';

// import { GlobalContext } from '../context/GlobalState';

export const TransactionList = (props) => {

  // const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className="transactionDetails">Transaction details</h3>
      <ul className="list">
        {props.transactions.map(transaction => (<Transaction
          key={transaction.id}
          transaction={transaction}
          handleDelete={props.handleDelete}
         />))}
      </ul>
    </>
  )
}
