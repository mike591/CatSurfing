import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props){
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout().then(() => (
      hashHistory.push("/")
    ))
  }

  render() {
    return(
      <div className='header'>
        <h1>
          <Link to='/'>
            CatSurfing
          </Link>
        </h1>

        <input className='header-search' type='text' placeholder='Where are your cats going?' />

        <button onClick={this.logout}>Log Out</button>
      </div>
    )
  }
}

export default Header;
