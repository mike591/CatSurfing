import React from 'react';
import Header from '../header/header_container'
import MapsContainer from '../maps/maps_container';
import { hashHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.center = this.center.bind(this);
    this.handleHostClick = this.handleHostClick.bind(this);
  }

  componentWillMount() {
    this.props.getHosts(this.props.city);
  }

  center(host) {
    return (e) => {
      e.preventDefault();
      let map = new google.maps.Map(document.getElementById('map'));
      let geocoder = new google.maps.Geocoder();
      let bounds = new google.maps.LatLngBounds();

      let address = host.address;
      address += `, ${host.city}`
      address += `, ${host.state}`

      geocoder.geocode( { 'address': address}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let latitude = results[0].geometry.location.lat();
          let longitude = results[0].geometry.location.lng();
          let latlong = {lat: latitude, lng: longitude};

          let marker = new google.maps.Marker({
            position: latlong,
            map: map
          })

          let infowindow = new google.maps.InfoWindow({
            content: address
          });
          marker.addListener('click', function() {
            infowindow.open(marker.get('map'), marker);
          });

          bounds.extend(marker.position);
        }
        map.fitBounds(bounds);
        map.setZoom(12);
      });
    }
  }

  handleHostClick(key) {
    return (e) => {
      hashHistory.push(`/host/${key}`)
    }
  }

  render() {
    let hosts = this.props.hosts
    let hostsList = Object.keys(this.props.hosts).map((key) => (
      <li key={key} className='host-index' onMouseEnter={this.center(hosts[key])} onClick={this.handleHostClick(key)} >
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
