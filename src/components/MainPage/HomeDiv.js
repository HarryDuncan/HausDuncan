import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../icons/Logo.svg'
import {NavBar} from '../';
import {SkywardsBanner} from '../MainPage'
import store from "../../store";
import Vivus from 'vivus';

export class HomeDiv extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			images : store.getState().gallery.bannerImages,
			Homeloaded : false,
		}


}


	loadScreen(){
		setTimeout(function(){
             this.setState({Homeloaded:true});
        }.bind(this),50);
	}

	render(){
		if(this.state.Homeloaded == false){
			this.loadScreen();
		}
		return(
			
			<div className="section">
			<div className="leftHalf" >
			<NavBar className={this.state.Homeloaded ? 'start' : '' }/>
			<img className={"logoHome " +  (this.state.Homeloaded ? 'start' : '' )} src={logo} />
		
			</div>
			<SkywardsBanner images={this.state.images} transition={this.state.Homeloaded}/>
			</div>
		);
	}
} 
