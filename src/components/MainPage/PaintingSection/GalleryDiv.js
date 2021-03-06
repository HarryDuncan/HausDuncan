import React from 'react';
import {PaintingObject} from './'
import store from "../../../store";
import scrollLeft from '../../../icons/scrollLeft.svg';
import scrollRight from '../../../icons/scrollRight.svg';
import Easel from "../../../icons/Easel.svg"


export class GalleryDiv extends React.Component{
	constructor(props){
		super(props);

		this.scrollR = this.scrollR.bind(this);
		this.scrollL = this.scrollL.bind(this);
		this.state= {
			paintings : store.getState().gallery.paintings,
			xPos : 0,
		};
		}
				

	scrollL(){
		if(this.state.xPos === 0){
			return;
		}else{
		var newX = this.state.xPos + 40;
			this.setState(
			{
			xPos : newX
			})
		}
	}
	scrollR(){
		if(this.state.xPos <= -180){
			return;
		}else{
		var newX = this.state.xPos - 40;
		this.setState(
		{
			xPos : newX
		})
		
		}
	}

	render(){
		
		return(
			<div className="gallerysection" >
			<img className="scroll L"  src={scrollLeft} alt='left' onClick={this.scrollL}/>
			<img className="scroll R" src={scrollRight} alt='right' onClick={this.scrollR}/> 
			<img className="Easel" alt='easel' src={Easel}/>
			<div className="galleryInner">
			
			<PaintingObject art={this.state.paintings} xPos={this.state.xPos}/>
			</div>
			</div>
		);
	}
} 