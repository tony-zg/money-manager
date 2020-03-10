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
import Home from './Home';
import Logo from '../images/logo.png';

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };
    this.routerRef = React.createRef();
    window.reff = this.routerRef;
  }


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
  this.routerRef.current.history.push('/');
}

  render() {
    return (
      <div className="content">
        <Router ref={this.routerRef}>
          <div className="headerImage"><img className="logo" alt="logo" src={Logo} /></div>

            <nav className="nav">

              <Link className="home" to="/">Home</Link>
              <Link className="accounts" to="/accounts">Accounts</Link>

              <span className="signInOut">
                {
                  this.state.loggedIn
                  ?
                  <Link className="logout" onClick={this.handleLogout}>Logout</Link>
                  :
                  <>
                  <Link className="login" to="/login">Login</Link>
                  <Link className="signUp" to="/registration">Sign Up</Link>
                  </>
                }

              </span>


            </nav>

            <Route exact path="/login" render={(props) => <Login {...props} onLogin={this.setLoginStatus} /> }  />
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
