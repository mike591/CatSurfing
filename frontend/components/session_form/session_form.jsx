import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  redirect() {
    this.props.router.push('/');
  }

  handleUsername(e) {
    let username = e.target.value;
    this.setState({username: username});
  }

  handlePassword(e) {
    let password = e.target.value;
    this.setState({password: password});
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.login({username: "Guest", password: "password"})
      .then((res) => this.props.router.push('/dashboard') )
  }

  render() {
    let link = (this.props.formType === 'login') ? '/signup' : '/login'
    let linkTitle = link.slice(1);
    const errors = this.props.errors.map((error, idx) => {
      return (<li key={idx}>{error}</li>)
    });

    return (
      <div className='session-page'>
        <div className="session-page-header">
          <h1>
            <Link to='/'>
              CatSurfing
            </Link>
          </h1>

          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><a href='#' onClick={this.handleGuest}>Guests</a></li>
          </ul>
        </div>

        <div className='session-page-form-container'>
          <div className='session-page-form'>
            <h1>{this.props.formType}</h1>
            <br></br>
            <form onSubmit={this.handleSubmit}>
              Username: <input onChange={this.handleUsername} type='text'></input>
              <br></br>
              Password: <input onChange={this.handlePassword} type='password'></input>
              <br></br>
              <input type='submit' value='Submit'/>
            </form>
            <br></br>
            <br></br>
            <ul>
              {errors}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SessionForm;
