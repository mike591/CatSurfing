import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: [
          'San Francisco, CA, United States',
          'Berkeley, CA, United States',
          'San Jose, CA, United States',
          'Sacramento, CA, United States',
          'San Diego, CA, United States',
          'Alameda, CA, United States',
          'Oakland, CA, United States',
          'Fremont, CA, United States'
        ]
    }

    this.logout = this.logout.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleExplore = this.handleExplore.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout().then(() => (
      hashHistory.push("/")
    ))
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    let query = document.getElementById('autocomplete').value
    hashHistory.push({pathname: '/search', query: query});
  }

  handleExplore(e) {
    e.preventDefault();
    let query = this.state.query[Math.floor(Math.random() * this.state.query.length)]
    window.location.reload();
    hashHistory.push({pathname: '/search', query: query});
  }

  componentDidMount() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    let input = document.getElementById('autocomplete');
    let options = {
      types: ['(cities)'],
      componentRestrictions: {country: "us"}
    };
    new google.maps.places.Autocomplete(input, options);
  }

  render() {
    return(
      <div className='header'>
        <h1 className='logo'>
          <Link to='/'>
            CatSurfing
          </Link>
        </h1>

        <form onSubmit={this.handleSearchSubmit} className='header-search-form'>
          <input id='autocomplete' className='header-search' type='text' placeholder='Where are your cats going?'/>
          <input className='header-search-icon' type='submit' value='&#x1f50d;' />
          <button className='button' onClick={this.handleExplore}>Explore</button>
        </form>



        <ul className='nav-list'>
          <li className='button' onClick={this.logout}>Log Out</li>
        </ul>
      </div>
    )
  }
}

export default Header;
