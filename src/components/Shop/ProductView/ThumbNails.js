import React from 'react';
import './ProductViewStyles.scss';

export const ThumbNails = (props) =>{
	if(props.MultiImages === null){
		return(
			null
			)
	}else{
		
		var images = Array.apply(null, {length: props.MultiImages}).map(Number.call, Number);
		var i = props.MultiImages;
		
		var result = 	
			images.map(function(thumnail, i){
			<div className="innerWrapper" key={i}>
			<p>{i}</p>
			</div>
				}
			)	
		

		return(
			<div className="thumbNailContainer">
			{result}
			</div>
			)
	}
}