import React from 'react';
import {ShopSection} from './';
import store from '../../store';
import StoreLogo from '../../icons/StoreLogo.svg';
import {Footer} from '../';
import './ShopStyles.scss';


export class Shop extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			products : store.getState().gallery.products,
			loaded : false,
		};
	}


  	loadPage(){
		setTimeout(function(){
             this.setState({loaded:true});
        }.bind(this),50);
	}





	render(){
		if(this.state.loaded == false){
		this.loadPage()
		}
		return(
			<div className="storePage">
				<img src={StoreLogo} className={"Title " +(this.state.loaded ? "enter" : "")}/>
				<div className="storeSection">
				<ShopSection/>
				</div>
			</div>
		);
	}
} 