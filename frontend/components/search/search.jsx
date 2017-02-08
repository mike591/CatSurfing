import React from 'react';
import Header from '../header/header_container'
import { hashHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      markers: [],
      openedWindow: null
    }

    this.openInfoWindow = this.openInfoWindow.bind(this);
    this.handleHostClick = this.handleHostClick.bind(this);
    this.initMap = this.initMap.bind(this);
    this.resetMap = this.resetMap.bind(this);
  }

  componentWillMount() {
    this.getHostsAndMarkers(this.props.city);
  }

  componentDidMount() {
    this.initMap(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    let query = Object.values(nextProps.location.query).join('').split(',');
    if (this.props.city !== query[0]) {
      this.getHostsAndMarkers(query[0]);
    }
    this.initMap(query[0]);
  }

  getHostsAndMarkers(city) {
    this.props.getHosts(city).then((res) => {
      let markers = [];
      Object.values(res.hosts).forEach((host) => {
        let latlng = {lat: host.latitude, lng: host.longitude};

        let marker = new google.maps.Marker({
          position: latlng,
        });

        let contentString = `
        <div className="marker-info" style="width: auto; height: auto; text-align: center;">
        <h1 style="font-size: 20px;">${host.username}</h1><br/>
        <h2 style="text-align: center;">${host.address}</h2>
        <a style="color: blue;" href="http://www.catsurfing.club/#/host/${host.id}">Host's Profile</a>
        </div>`;

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('click', () => {
          let openedWindow = this.state.openedWindow;
          if (openedWindow !== null) {
            openedWindow.close();
          }

          infowindow.open(map, marker);

          this.setState({openedWindow: infowindow});
        });

        markers.push(marker);

      })
      this.setState({markers: markers});
    });
  }

  initMap(city) {
    let geocoder = new google.maps.Geocoder();
    let map = new google.maps.Map(document.getElementById('map'))

    geocoder.geocode( { 'address': city }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        let latitude = results[0].geometry.location.lat();
        let longitude = results[0].geometry.location.lng();
        let location = {lat: latitude, lng: longitude}

        map.setCenter(location);
        map.setZoom(13);
        this.setState({map: map, location: location});
      }
    });
  }

  openInfoWindow(host) {
    return (e) => {
      e.preventDefault();
      let map = this.state.map;
      let openedWindow = this.state.openedWindow;

      if (openedWindow !== null) {
        openedWindow.close();
      }

      let marker
      this.state.markers.forEach((mark) => {
        if (typeof mark.position === 'undefined') {
          // Lat Lng doesnt exists - skip
        } else {
          if (+(mark.getPosition().lat().toFixed(7)) === host.latitude && +(mark.getPosition().lng().toFixed(7)) == host.longitude) {
            marker = mark
          }
        }
      })

      let latlng = {lat: marker.position.lat(), lng: marker.position.lng()}
      let contentString = `<div className="marker-info" style="width: auto;
      height: auto;"><h1 style="font-size: 20px;">${host.username}</h1><br/><h2
      style="text-align: center;">${host.address}</h2></div>`;


      let infowindow = new google.maps.InfoWindow({
         content: contentString
       });

      infowindow.open(map, marker);

      map.setCenter(latlng);
      map.setZoom(13);
      this.setState({map: map, openedWindow: infowindow});
    }
  }

  resetMap() {
    let map = this.state.map;
    let markers = this.state.markers

    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }

    this.setState({map: map, markers: []})
  }


  handleHostClick(key) {
    return (e) => {
      hashHistory.push(`/host/${key}`)
    }
  }

  render() {
    let hosts = this.props.hosts
    let hostsList
    if (Object.keys(hosts).length === 0) {
      hostsList = <li className='host-index' >No Hosts In That Area :(</li>
    } else {
      hostsList = Object.keys(hosts).map((key) => {
        let host = hosts[key];

        return (
          <li key={key} className='host-index' onMouseEnter={this.openInfoWindow(host)} onClick={this.openInfoWindow(host)} >
            <div className='host-profile-container'>
              <span className='host-icon' onClick={this.handleHostClick(host.id)}>{host.username[0]}</span>
              <h1 className='host-username' onClick={this.handleHostClick(host.id)}>{host.username}</h1>
            </div>
            <h1 className='host-detail'>{host.status}</h1>
            <h1 className='host-detail'>{host.address}</h1>
          </li>
        )
      });
    }

    if (this.state.map != null) {
      this.state.markers.forEach((marker) => {
        if (marker.getMap() !== this.state.map) {
          marker.setMap(this.state.map);
        }
      });
    }

    return (
      <div className='search-page'>
        <Header />
        <div className='search-page-content'>
          <div className='search-page-left'>
            <div className='search-page-list'>
              <h1 className='search-page-list-title'>Hosts In {this.props.city}</h1>
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
