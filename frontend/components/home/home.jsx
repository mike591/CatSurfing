import React from 'react';
import { Link } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    }

    this.handleGuest = this.handleGuest.bind(this);
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.login({username: "Guest", password: "password"})
      .then((res) => this.props.router.push('/dashboard') )
  }

  render() {
    return(
      <div className="home-page">
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

        <div className="home-page-main">
          <p>Let your cats travel the world!</p>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><a href='#' onClick={this.handleGuest}>Guests</a></li>
          </ul>
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