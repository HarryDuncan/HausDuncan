import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {CustomMarker} from './customMarker';
import './ContactSection.scss';
                    
const myLocation = { lat: -36.8485, lng: 174.7633 };



const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDJS93XIGSerLOdNj2Owui-sKrCJkDPcDA",
    loadingElement: <div  className='MapContainer' />,
    containerElement: <div className='MapContainer'/>,
    mapElement: <div style={{ height: `100%` , width: '100%'}} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: -36.78, lng: 175.833 }}
  >
    {props.isMarkerShown && <Marker position={myLocation} onClick={props.onMarkerClick}/>}
  </GoogleMap>
)

export class MapContainer extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}