import React from 'react';
import Header from '../header/header_container'
import MapsContainer from '../maps/maps_container';
import { hashHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: ''
    }

    this.addMarker = this.addMarker.bind(this);
    this.handleHostClick = this.handleHostClick.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  componentWillMount() {
    this.props.getHosts(this.props.city);
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    let query = Object.values(nextProps.location.query).join('').split(',');
    this.initMap(query[0]);
  }

  componentWillUpdate(nextProps) {

  }

  addMarker(host) {
    return (e) => {
      e.preventDefault();
      let map = this.state.map;

      let latlng = {lat: host.latitude, lng: host.longitude}
      let marker = new google.maps.Marker({
        position: latlng,
        map: map
      })

      map.setCenter(latlng);
      map.setZoom(13);
      this.setState({map: map});
    }
  }

  initMap(city) {
    let geocoder = new google.maps.Geocoder();
    let map = new google.maps.Map(document.getElementById('map'))

    geocoder.geocode( { 'address': city }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        let latitude = results[0].geometry.location.lat();
        let longitude = results[0].geometry.location.lng();

        map.setCenter({lat: latitude, lng: longitude});
        map.setZoom(13);
        this.setState({map: map});
      }
    });
  }

  handleHostClick(key) {
    return (e) => {
      hashHistory.push(`/host/${key}`)
    }
  }

  refreshMap() {
    window.location.reload();
  }

  render() {
    let hosts = this.props.hosts
    let hostsList
    if (Object.keys(hosts).length === 0) {
      hostsList = <li className='host-index' >No Hosts In That Area :(</li>
    } else {
      hostsList = Object.keys(hosts).map((key) => {
        let host = hosts[key]

        return (
          <li key={key} className='host-index' onClick={this.handleHostClick(key)} >
            <h1>Username: {host.username}</h1>
            <h1>Status: {host.status}</h1>
          </li>
        )
      });
    }

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
            <div id='map'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
