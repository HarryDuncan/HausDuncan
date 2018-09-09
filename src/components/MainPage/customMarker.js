import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, OverlayView } from "react-google-maps";
import {ContactForm} from './ContactForm';
import './ContactSection.scss';

    export class CustomMarker extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                isShown: true,
            }
        }


        showMarkerContent() {
            this.setState({
                isShown: true
            });
        }

        hideMarkerContent() {
            this.setState({
                isShown: false
            });
    }
        
                render() {
                    return (
                        <Marker
                            key={this.props.key}
                            position={this.props.position}
                            icon=''
                        >
                            {
                                this.state.isShown &&
                                <OverlayView
                                    
                                    key={ Math.random() }
                                    position={this.props.position}
                                    mapPaneName={"overlayMouseTarget"}
                                >
                                    <div className="customMarker">
                                    <ContactForm/>
                                   </div>
                                </OverlayView>
                            }
                        </Marker>
                    );
                }

        }