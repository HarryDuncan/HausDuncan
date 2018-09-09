import React from 'react';
import PropTypes from 'prop-types';
import {PaintingGallery} from './';
import store from '../../store';
import GalleryLogo from '../../icons/GalleryLogo.svg';
import {Footer, NavBar} from '../';

export class GallerySection extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			paintings : store.getState().gallery.paintings,
			loaded : false,
		};
	}





	loadPaintings(){
		setTimeout(function(){
             this.setState({loaded:true});
        }.bind(this),50);
	}


	render(){
		if(this.state.loaded == false){
		this.loadPaintings()
		}
		return(
			<div className="gallerypage">
				<NavBar/>
				<img src={GalleryLogo} className={"Title " + (this.state.loaded ? "enter" : "")}/>
				<div className={"galDiv " + (this.state.loaded ? "enter" : "")}>
				<PaintingGallery  art={this.state.paintings}/>
				</div>
			</div>
		);
	}
} 