import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div class="home-page">
        <div class="home-page-header">Header
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>

        <div class="home-page-main">
          Main
        </div>

        <div class="home-page-desc">
          Description
        </div>
      </div>
    )
  }
}

export default Home;
