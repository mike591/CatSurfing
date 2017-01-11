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

  removeErrors() {
    this.props.removeErrors();
  }

  render() {
    const errors = this.props.errors.map((error, idx) => {
      return (<li key={idx}>{error}</li>)
    });

    return (
      <div className='session-page'>
        <div className="home-page-header">
          <h1>
            <Link to='/'>
              CatSurfing
            </Link>
          </h1>

          <ul>
            <li><Link to='/login' onClick={this.removeErrors}>Login</Link></li>
            <li><Link to='/signup' onClick={this.removeErrors}>Sign Up</Link></li>
            <li><a href='#' onClick={this.handleGuest}>Guests</a></li>
          </ul>
        </div>

        <div className='session-page-form-container'>
          <div className='session-page-form'>
            <h1>{this.props.formType}</h1>
            <br></br>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input onChange={this.update('username')} type='text' placeholder='Username'></input>
              </label>
              <br></br>
              <label>
                <input onChange={this.update('password')} type='password' placeholder='Password'></input>
              </label>
              <br></br>

              <label>
                <input onChange={this.update('email')} type={ (this.props.formType === 'signup') ? 'text' : 'hidden'} placeholder='Email'></input>
              </label>
              <br></br>

              <label>
                <input onChange={this.update('address')} type={ (this.props.formType === 'signup') ? 'text' : 'hidden'} placeholder='Address'></input>
              </label>
              <br></br>

              <label>
                <input onChange={this.update('city')} type={ (this.props.formType === 'signup') ? 'text' : 'hidden'} placeholder='City'></input>
              </label>
              <br></br>

              <label>
                <input onChange={this.update('state')} type={ (this.props.formType === 'signup') ? 'text' : 'hidden'} placeholder='State'></input>
              </label>
              <br></br>

              <label>
                <input onChange={this.update('zip')} type={ (this.props.formType === 'signup') ? 'text' : 'hidden'} placeholder='Zip'></input>
              </label>
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

        <div className="home-page-desc">
          <h1>CatSurfing is...</h1>
          <p>A website dedicated to the happiness of cats. Users can send cats
            to a friend anywhere across the globe! Users can also offer to host
            any cats curious enough to visit your part of the world.</p>
        </div>
      </div>
    )
  }
}

export default SessionForm;
