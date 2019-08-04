import React from 'react';
import logo from '../../../icons/Logo.svg'
import {NavBar} from '../../';
import {SkywardsBanner, MobileHero} from './'
import store from "../../../store";

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
		if(this.state.Homeloaded === false){
			this.loadScreen();
		}
		const isMobile = window.innerWidth <= 900;
		let isIE = /*@cc_on!@*/false || !!document.documentMode;
		let isEdge = !isIE && !!window.StyleMedia;
		if(isMobile || isEdge || isIE){
			return(
				<div className="section">
			<div className="leftHalf" >
			<NavBar className={this.state.Homeloaded ? 'start' : '' }/>
			<img alt='mobile' className={"logoHome " +  (this.state.Homeloaded ? 'start' : '' )} src={logo} />
			<MobileHero images={this.state.images}/>
		
			</div>
			
			</div>
				)
		}else{
			return(
			<div className="section">
			<div className="leftHalf" >
			<NavBar className={this.state.Homeloaded ? 'start' : '' }/>
			<img alt='logo' className={"logoHome " +  (this.state.Homeloaded ? 'start' : '' )} src={logo} />
		
			</div>
			<SkywardsBanner images={this.state.images} transition={this.state.Homeloaded}/>
			</div>
		);
		}
		
	}
} 
