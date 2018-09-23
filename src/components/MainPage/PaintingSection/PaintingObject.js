import React from 'react';
import posed from 'react-pose';
import {PaintingTile} from './PaintingTile';
import './PaintingObject.scss';






export class PaintingObject extends React.Component{
	constructor(props){
		super(props);
		
			
		}

	render(){
	let isIE = /*@cc_on!@*/false || !!document.documentMode;
	var css = '';
	var move = this.props.xPos;
	var moveBy = 'translateX('+move+'%)';
	var trans = 'transform 700ms ease-out'
	css = { 
			transition: trans,
			transform : moveBy
			};

	 var  result = '';
	 var painting = this.props.art.data
	if(painting != null && painting.length != 0){
	 	  result = painting.slice(0, 6).map((piece) => 
	 	  	<PaintingTile key={piece.ID} Data={piece} />
			);
	 }
		
		return(

			<div style={css} className={isIE ? 'mainDivIE' : 'mainDiv'} >
			
			<div  className='slider'>
			{result}
			</div>
			</div>
			
			);
	
} 

}



PaintingObject.defaultProps = {
	art : [],
};
