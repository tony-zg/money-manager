import React, {Component} from 'react';
  import axios from 'axios';


  // const URL_USER = 'http://localhost:3000/users/'

  let URL_USER = '';
    if (process.env.NODE_ENV !== 'production') {
      URL_USER = 'http://localhost:3000/users';
    } else {
      URL_USER = 'https://tg-money-manager.herokuapp.com/users';
    }

class Registration extends Component {

  state = {
    email:'',
    name: '',
    password: '',
    password_confirmation: ''
  }


  handleEmail = event => {
    this.setState({ email: event.target.value });
  }

  handleName = event => {
    this.setState({ name: event.target.value });
  }

  handlePassword = event => {
    this.setState({ password: event.target.value });
  }

  handlePasswordConfirmation = event => {
    this.setState({password_confirmation: event.target.value});
  }

  createAccount = (email, name, password, password_confirmation) => {
    console.log({email: email,
      name: name,
      password: password,
      password_confirmation: password_confirmation
    });
    axios.post(URL_USER, {
    email: email,
    name: name,
    password: password,
    password_confirmation: password_confirmation
    })
    .then( res => {
    console.log(res);
    this.props.history.push('/login');
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createAccount(this.state.email,
    this.state.name,
    this.state.password,
    this.state.password_confirmation);
  }

  render(){
    return(
    <div className="createAccountBoxBorder">
        <form className="form" onSubmit = {this.handleSubmit}>
          <br></br>
          <input className="email" type="email" placeholder="Email" onChange={this.handleEmail}/> <br/>
          <br></br>
          <input className="userName" type="text" placeholder="User Name" onChange={this.handleName}/> <br/>
          <br></br>
          <input className="password" type="password" placeholder="Password" onChange={this.handlePassword}/> <br/>
          <br></br>
          <input className="comfiredPassword" type="password" placeholder="Confirm Password" onChange={this.handlePasswordConfirmation}/> <br/>
          <br></br>
          <input className="buttonOne" type="submit" value="Sign Up"/>
          <br></br>
          <br></br>
        </form>
      </div>
    );
  }
}

export default Registration;
