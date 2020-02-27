import React from 'react';
import { Transaction } from './Transaction';

export const TransactionList = (props) => {

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
