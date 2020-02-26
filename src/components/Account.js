import React from 'react';
import axios from 'axios';


import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import { GlobalProvider } from '../context/GlobalState';


class Account extends React.Component {

  state = {
    transactions: []
  };

  componentDidMount(){
    const accountID = this.props.match.params.id;
    const URL = `http://localhost:3000/accounts/${accountID}`;
    const token = localStorage.getItem('auth_token');
    axios.get(URL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then( res => {
      console.log('response:', res.data);
      this.setState({transactions: res.data.transactions})
    })
    .catch( err => {
      console.warn( err );
    });
  }

  addTransaction = (transaction) => {
    console.log('add!', transaction);
    this.setState({
      transactions: [ transaction, ...this.state.transactions ]
    });
  }

  deleteTransaction = (id) => {

    const transactionsCopy = [...this.state.transactions];
    const indPos = transactionsCopy.findIndex(t => id === t.id);
    // for (var i = 0; i < transactionsCopy.length; i++) {
    //
    //   if (id === transactionsCopy[i].id) {
    //     indPos = i
    //   }
    // } // for loop

    transactionsCopy.splice(indPos, 1)
    this.setState({ transactions: transactionsCopy})

    // console.log('delete', transaction);
    // const transactionsCopy = [...this.state.transactions];
    // // transactionsCopy.findIndex(transaction)
    //
    // // 1. get the transaction that we need to delete
    //
    // // 1.1: The state of account
    // // Get this
    // console.log(transactionsCopy)
    // // 1.2 get the specific transaction
    // // 1.2.1 We need to get the id of the transaction
    // console.log(transaction);
    //
    // // 2. Delete that transaction
    // // 2.1 get the index
    // // const indPos = transactionsCopy.findIndex(transaction)
    //
    // // console.log('the indPos is:', indPos);
    // console.log('trans copy is');
    // console.log(transactionsCopy);
    // // We need to loop over and see where there is a transaction that matches
    //
    // let indPos = null;
    // for (var i = 0; i < transactionsCopy.length; i++) {
    //
    //   if (transaction === transactionsCopy[i].id) {
    //     indPos = i
    //   }
    //
    // } // end of for loop
    //
    // console.log('ind pos is');
    // console.log(indPos);
    //
    // // Remove the transaction from the Transaction list
    //
    // // Update the new object
    // console.log('trans copy is');
    // console.log(transactionsCopy)
    // // REMOVE from the array, whatever is at this index position
    // transactionsCopy.splice(indPos, 1)
    // console.log('trans copy is');
    // console.log(transactionsCopy);
    //
    // // Actually update the state. Now state has removed ytransac tion
    // this.setState({ transactions: transactionsCopy})
    //
    //





  }

  render(){
    return(
      <div>
        <GlobalProvider>
          <div className="container">
            <Balance
            transactions={this.state.transactions}/>
            <IncomeExpenses
            transactions={this.state.transactions}
            />
            <TransactionList
              transactions={this.state.transactions}
              handleDelete={this.deleteTransaction}
            />

            <AddTransaction   handleTransaction={this.addTransaction} />
          </div>
        </GlobalProvider>


      </div>
    );
  } // render

} // class

export default Account;
