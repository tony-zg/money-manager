import React, {useState} from 'react'

export const AddTransaction = (props) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount
    }

    props.handleTransaction(newTransaction);
    setText('');
    setAmount('');
  }

  return (
    <>
      <h3 className="addNewTransaction">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className= "description" htmlFor="text">Description</label>
          <input className="addTransactionDescription" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Description" />
        </div>
        <br/>
        <div className="form-control">
          <label className= "amount" htmlFor="amount">Amount</label>
          <input className="addTransactionAmount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
        </div>
        <br/>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
