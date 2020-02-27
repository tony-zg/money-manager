// import React from 'react';
// import axios from 'axios';
//
// let ACCOUNT_URL;
//   if (process.env.NODE_ENV !== 'production') {
//     ACCOUNT_URL = 'http://localhost:3000/accounts/';
//   } else {
//     ACCOUNT_URL = 'https://tymovie-server.herokuapp.com/accounts/';
//   }
// class NewAccount extends React.Component {
//
//   state = {
//     name:'',
//     user_id: ''
//   };
//
//   handleInput = event => {
//     this.setState({ name: event.target.value });
//   }
//
//   handleSubmit = (event) => {
//
//     event.preventDefault();
//
//
//     const token = localStorage.getItem('auth_token');
//     console.log('token!', token)
//     if (token !== null) {
//
//     axios.post(ACCOUNT_URL,
//     // form data (becomes params in Rails)
//     {
//       name: this.state.name,
//     },
//     // config:
//     {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     })
//     .then( res => {
//       console.log('response:', res.data);
//
//     })
//     .catch( err => {
//       console.warn( err );
//     });
//
//     } else {
//     this.props.history.push('/');
//     }
// }
//
//
//   render(){
//     return(
//       <div>
//
//         <form onSubmit={this.handleSubmit}>
//         <input className="title" placeholder="Title" type="text" onChange={this.handleInput}/>
//         <br/>
//         <br/>
//         <input className="button" type="submit" value="Add review" />
//
//
//         </form>
//       </div>
//     );
//   }
// }
//
//
// export default NewAccount;
