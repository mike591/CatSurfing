import React from 'react';

class Maps extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidUpdate() {
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
    });

    let geocoder = new google.maps.Geocoder();
    let bounds = new google.maps.LatLngBounds();

    Object.values(this.props.hosts).forEach((host) => {
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
      });
    })
  }

  render() {
    return (
      <div id="map">

      </div>
    )
  }
}

export default Maps;
