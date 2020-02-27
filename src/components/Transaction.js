import React from 'react';

export const Transaction = ({transaction, handleDelete}) => {

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
       <span>
         {sign}${Math.abs(transaction.amount)}
       </span>

    </li>
  )
}
