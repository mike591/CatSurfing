import React from 'react';

class Maps extends React.Component {
  constructor(props){
    super(props);

    this.setMarkers = this.setMarkers.bind(this);
  }

  componentDidMount() {
    let uluru = {lat: 37.791724, lng: -122.393696};
    let map = new google.maps.Map(document.getElementById('map'), {
      // TODO THIS MAP IS NOT GLOBAL
      zoom: 15,
      center: uluru
    });


    let marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  setMarkers(address) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        let marker = new google.maps.Marker({
            setMap: map,
            // TODO SHOULD NOT BE SET MAP
            position: results[0].geometry.location
        });
      }
    });
  }

  render() {
    Object.values(this.props.hosts).forEach((host) => (
      this.setMarkers(host.address)
    ));

    return (
      <div id="map">

      </div>
    )
  }
}

export default Maps;
