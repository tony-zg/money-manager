import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

let ACCOUNT_URL;
  if (process.env.NODE_ENV !== 'production') {
    ACCOUNT_URL = 'http://localhost:3000/accounts/';
  } else {
    ACCOUNT_URL = 'https://tg-money-manager.herokuapp.com/accounts/';
  }

class AccountList extends React.Component {

  state = {
    accounts: [],
    name:'',
    user_id: ''
  };

  componentDidMount(){
    const URL = 'http://localhost:3000/accounts';
    const token = localStorage.getItem('auth_token');

    if(token) {

      axios.get(URL, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then( res => {
        console.log('response:', res.data);
        this.setState({accounts: res.data})
      })
      .catch( err => {
        console.warn( err );
      });

    } else {
      this.props.history.push('/login')
    }


  } // componentDidMount()




  handleInput = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    // console.log(e)
    event.preventDefault();

    const token = localStorage.getItem('auth_token');
    console.log('token!', token)
    if (token !== null) {

    axios.post(ACCOUNT_URL,
    // form data (becomes params in Rails)
    {
      name: this.state.name,
    },
    // config:
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then( res => {
      console.log('response:', res.data.data);
    
      this.setState({
                      accounts: [ res.data.data, ...this.state.accounts],
                      name: ''
                    })
    })
    .catch( err => {
      console.warn( err );
    });

    } else {
    this.props.history.push('/');
    }
  }


  render(){

    return(
      <div>
        <h2 className="accountList">Accounts</h2>
        <h4 className="allAccounts">Here are all your accounts</h4>
          {
            this.state.accounts.length >= 1
            ?
            <ul className='accounts'>
            {
              this.state.accounts.map( account => (
              <li key={account.id}>
                <Link to={`/accounts/${account.id}`} key={account.id}>
                {account.name}
                </Link>
              </li>
              ))
            }
          </ul>
          :
          <p>loading...</p>
          }
        <br/>
        <div className='formContainer'>
          <form className="createAccountForm" onSubmit={this.handleSubmit}>
            <h4 className="otherAccounts">Create other accounts</h4>
            <input className="title" placeholder="Name" type="text" onChange={this.handleInput} value={this.state.name}/>
            <br/>
            <input className="buttonCreate" type="submit" value="Create Account" />
          </form>
        </div>
      </div>
    );
  }
} // AccountList

export default AccountList;
