import React from 'react';
import axios from 'axios';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import { GlobalProvider } from '../context/GlobalState';

let URL_ACCOUNTS = '';
let URL_TRANSACTIONS = '';
  if (process.env.NODE_ENV !== 'production') {
    URL_ACCOUNTS = 'http://localhost:3000/accounts/';
    URL_TRANSACTIONS = 'http://localhost:3000/transactions/';
  } else {
    URL_ACCOUNTS = 'https://tg-money-manager.herokuapp.com/accounts/';
    URL_TRANSACTIONS = 'https://tg-money-manager.herokuapp.com/transactions/';
  }

class Account extends React.Component {

  state = {
    transactions: [],
    text: '',
    amount: '',
    accountId: '',
    name: ''
  };

  componentDidMount(){
    const accountID = this.props.match.params.id;
    const URL = `${URL_ACCOUNTS}${accountID}`;

    const token = localStorage.getItem('auth_token');

    if(token) {

      axios.get(URL, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then( res => {
        console.log('response:', res.data);
        this.setState({transactions: res.data.transactions, name: res.data.name})
      })
      .catch( err => {
        console.warn( err );
      });

    } else {
      this.props.history.push('/login');
    }

  }

  addTransaction = (transaction) => {
    const token = localStorage.getItem('auth_token');

    console.log('token!', token)
    if (token !== null) {

      axios.post(URL_TRANSACTIONS,
      // form data (becomes params in Rails)
      {
        text: transaction.text,
        amount: transaction.amount,
        account_id: this.props.match.params.id
      },
      // config:
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then( res => {
        console.log('response:', res.data);
        this.setState({ transactions: [ res.data, ...this.state.transactions ] });


      })
      .catch( err => {
        console.warn( err );
      });

    } else {
        this.props.history.push('/');
    }

  } // addTransaction()

  render(){
    return(
      <div>
        <GlobalProvider>
          <br/>
          <h2 className="accountName">{this.state.name}</h2>
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
