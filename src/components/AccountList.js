import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class AccountList extends React.Component {

  state = {
    accounts: []
  };

  componentDidMount(){
    const URL = 'http://localhost:3000/accounts';
    const token = localStorage.getItem('auth_token');
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
  }

  render(){
    return(
      <div>
        <h1>Accounts</h1>
          {
            this.state.accounts.length >= 1
            ?
            <ul className='accounts'>
            {
              this.state.accounts.map( account => (
              <li >
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
      </div>
    );
  }
}

export default AccountList;
