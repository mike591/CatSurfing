import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.removeErrors = this.removeErrors.bind(this);
    this.nav = this.nav.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.formType != this.props.formType) {
      this.removeErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  redirect() {
    this.props.router.push('/');
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.login({username: "Guest", password: "password"})
      .then((res) => this.props.router.push('/dashboard') )
  }

  nav(link) {
    return (e) => {
      e.preventDefault();
      hashHistory.push(link);
    }
  }

  removeErrors() {
    this.props.removeErrors();
  }

  render() {
    const errors = this.props.errors.map((error, idx) => {
      return (<li key={idx}>{error}</li>)
    });

    let credentialChoice;
    if (this.props.formType === 'signup') {
      credentialChoice = <h2 className='credential-choice'>Already have an account? <Link className='choice-link' onClick={this.nav('/login')}>login</Link></h2>
    } else {
      credentialChoice = <h2 className='credential-choice'>Don't have an account? <Link className='choice-link' onClick={this.nav('/signup')}>signup</Link></h2>
    }

    return (
      <div className='session-page'>
        <div className="home-page-header">
          <h1 className='logo'>
            <Link to='/'>
              CatSurfing
            </Link>
          </h1>

          <ul className='nav-list'>
            <li className="button" onClick={this.nav('/login')}>Login</li>
            <li className="button" onClick={this.nav('/signup')}>Sign Up</li>
            <li className="button" onClick={this.handleGuest}>Guest Login</li>
          </ul>
        </div>

        <div className='session-page-form-container'>
          <div className='session-page-form'>
            <h1 className='formType'><hr/>{this.props.formType}<hr/></h1>
            <br></br>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input onChange={this.update('username')} type='text' placeholder='Username' required></input>
              </label>
              <br></br>
              <label>
                <input onChange={this.update('password')} type='password' placeholder='Password' required></input>
              </label>
              <br></br>

              <label>
                <input onChange={this.update('email')} type={ (this.props.formType === 'signup') ? 'text' : 'hidden'} placeholder='Email' required></input>
              </label>
              <br></br>

              <label>
                <input onChange={this.update('address')} type={ (this.props.formType === 'signup') ? 'text' : 'hidden'} placeholder='Address' required></input>
              </label>
              <br></br>

              <label>
                <input onChange={this.update('city')} type={ (this.props.formType === 'signup') ? 'text' : 'hidden'} placeholder='City' required></input>
              </label>
              <br></br>

              <label>
                <input onChange={this.update('state')} type={ (this.props.formType === 'signup') ? 'text' : 'hidden'} placeholder='State' required></input>
              </label>
              <br></br>

              <label>
                <input onChange={this.update('zip')} type={ (this.props.formType === 'signup') ? 'text' : 'hidden'} placeholder='Zip' required></input>
              </label>
              <br></br>

              <input className='form-button' type='submit' value='Submit'/>
            </form>
            {credentialChoice}
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
