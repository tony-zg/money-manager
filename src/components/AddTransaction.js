import React, {useState, useContext} from 'react'
// import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = (props) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  // const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
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
          <input className="addTransactionDescription" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
        </div>
        <br/>
        <div className="form-control">
          <label className= "amount" htmlFor="amount">Amount</label>
          <input className="addTransactionAmount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
        </div>
        <br/>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
