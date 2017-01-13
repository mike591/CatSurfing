import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props){
    super(props);

    this.logout = this.logout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout().then(() => (
      hashHistory.push("/")
    ))
  }

  handleSearch(e) {
    e.preventDefault();
    hashHistory.push('/search');
  }

  render() {
    return(
      <div className='header'>
        <h1 className='logo'>
          <Link to='/'>
            CatSurfing
          </Link>
        </h1>

        <form onSubmit={this.handleSearch} className='header-search-form'>
          <input className='header-search' type='text' placeholder='Where are your cats going?' />
          <input className='header-search-icon' type='submit' value='&#x1f50d;' />
        </form>


        <ul className='nav-list'>
          <li className='button' onClick={this.logout}>Log Out</li>
        </ul>
      </div>
    )
  }
}

export default Header;
