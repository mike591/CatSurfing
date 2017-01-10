import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home-page">
        <div className="home-page-header">Header
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>

        <div className="home-page-main">
          Main
        </div>

        <div className="home-page-desc">
          Description
        </div>
      </div>
    )
  }
}

export default Home;
