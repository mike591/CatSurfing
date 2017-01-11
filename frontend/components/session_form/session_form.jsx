import React from 'react';
import { Link } from 'react-router';

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

  render() {
    let link = (this.props.formType === 'login') ? '/signup' : '/login'
    let linkTitle = link.slice(1);
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
              <label> Username:
                <input onChange={this.update('username')} type='text'></input>
              </label>
              <br></br>
              <label> Password:
                <input onChange={this.update('password')} type='password'></input>
              </label>
              <br></br>

              <label> Email:
                <input onChange={this.update('email')} type='text'></input>
              </label>
              <br></br>

              <label> Address:
                <input onChange={this.update('address')} type='text'></input>
              </label>
              <br></br>

              <label> City:
                <input onChange={this.update('city')} type='text'></input>
              </label>
              <br></br>

              <label> State:
                <input onChange={this.update('state')} type='text'></input>
              </label>
              <br></br>

              <label> Zip:
                <input onChange={this.update('zip')} type='text'></input>
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
