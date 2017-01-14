import React from 'react';
import Header from '../header/header_container'
import MapsContainer from '../maps/maps_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getHosts(this.props.city);
  }

  render() {
    let hosts = this.props.hosts
    let hostsList = Object.keys(this.props.hosts).map((key) => (
      <li key={key} className='host-index'>
        <h1>Username: {hosts[key].username}</h1>
        <h1>Status: {hosts[key].status}</h1>
      </li>
    ));

    return (
      <div className='search-page'>
        <Header />
        <div className='search-page-content'>
          <div className='search-page-left'>
            <div className='search-page-list'>
              <h1 className='search-page-list-title'>Hosts</h1>
              <ul>
                {hostsList}
              </ul>
            </div>
          </div>
          <div className='search-page-right'>
            <MapsContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
