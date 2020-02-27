import React from 'react';
import {
  Route,
  Link,
  HashRouter as Router
  } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

import AccountList from './AccountList';
import Account from './Account';
import NewAccount from './NewAccount';
import Home from './Home';

class Header extends React.Component {

  state = {
  loggedIn: false

};

componentDidMount(){
  const token = localStorage.getItem('auth_token');
  if(token){
    this.setState({ loggedIn: true });
  }
}

setLoginStatus = (loggedIn) => {
  console.log('hi!', loggedIn);
  this.setState({ loggedIn: loggedIn });
}

handleLogout = () => {
  this.setState({ loggedIn: false });
  localStorage.removeItem('auth_token');
  window.location.href = '/';

}

  render() {
    return (
      <div>
        <Router>
            <nav className="nav">


                {
                  this.state.loggedIn
                  ?
                  <a onClick={this.handleLogout}>Logout</a>
                  :
                  <Link to="/login">Login</Link>
                }|

              <Link to="/registration">Sign Up</Link>|
              <Link to="/">Home</Link>|
              <Link to="/accounts">Accounts</Link>



            </nav>

            <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.setLoginStatus} /> } />
            <Route exact path="/registration" component={ Registration } />
            <Route exact path="/accounts" component={ AccountList } />
            <Route exact path="/newAccount" component={ AccountList } />
            <Route exact path="/" component={ Home } />
            <Route exact path="/accounts/:id" component={ Account } />




        </Router>
      </div>
    );
  }
}

export default Header;
