import React from 'react';
import { Link, hashHistory } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import Maps from '../maps/maps_container';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    }
    this.handleGuest = this.handleGuest.bind(this);
    this.nav = this.nav.bind(this);
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

  render() {
    return(
      <div className="home-page">
        <div className="home-page-header">
          <h1 className='logo'>
            <Link to='/'>
              CatSurfing
            </Link>
          </h1>

          <ul className='nav-list'>
            <li className="button" onClick={this.nav('/login')}>Login</li>
            <li className="button" onClick={this.nav('/signup')}>Sign Up</li>
            <li className="button" onClick={this.handleGuest}>Guests</li>
          </ul>
        </div>

        <div className="home-page-main">
          <div className="home-page-main-content">
            <p>Let your cats travel the world!</p>
            <ul>
              <li className="main-button" onClick={this.nav('/login')}>Login</li>
              <li className="main-button" onClick={this.nav('/signup')}>Sign Up</li>
              <li className="main-button" onClick={this.handleGuest}>Guests</li>
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

export default Home;
