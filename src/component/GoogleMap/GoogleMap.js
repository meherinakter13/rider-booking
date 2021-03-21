import React, {Component} from 'react';
import {Map, Marker,GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter:{ 
          lat: 23.728783,
          lnh:90.393791
      }
    };
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
        onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
        </Map>
      )
    }
  }
export default GoogleApiWrapper({
    apiKey: ("")
  })(MapContainer)