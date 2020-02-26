import React, {Component} from 'react';
import axios from 'axios';


// const URL_USER = 'http://localhost:3000/api/user_token/' // 'http://10.1.4.76/sessions.json';

let URL_USER = '';
  if (process.env.NODE_ENV !== 'production') {
    URL_USER = 'http://localhost:3000/api/user_token';
  } else {
    URL_USER = 'https://money-manager-server.herokuapp.com/api/user_token';
  }


class Login extends Component {

  state = {
    email: '',
    password: '',
    logged_in: false
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  }

  handlePassword = event => {
    this.setState({ password: event.target.value });
  }

  login = (userEmail, pwd) => {
    console.log({auth:{
      email: userEmail,
      password: pwd
    }});

    axios.post(URL_USER, {auth:{
      email: userEmail,
      password: pwd
    }})
    .then( res => {
      console.log(res);
      if (res.data.jwt) {
        this.setState({ logged_in: true });
        localStorage.setItem('auth_token', res.data.jwt);

        // tell the Home component we logged in - so it can update the nav bar
        this.props.onLogin(true);

        this.props.history.push('/accounts');
      } else {
        console.warn("Login error!", res);
      }


    })
    .catch( err => console.warn(err));

    if (this.state.logged_in) {
      this.props.history.push('/');
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.login(this.state.email, this.state.password);
  }

  render() {
    return(
      <div className="loginBoxBorder">
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <input className="email" type="text" placeholder="Email" onChange={this.handleEmail} />
          <br></br>
          <br></br>
          <input className="password" type="password" placeholder="Password" onChange={this.handlePassword}  />
          <br></br>
          <br></br>
          <input className="buttonOne" type="submit" value="Login"/>
          <br></br>
          <br></br>
        </form>
      </div>
    );
  }
}

export default Login;
