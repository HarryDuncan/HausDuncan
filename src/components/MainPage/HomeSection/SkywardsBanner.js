import React from 'react';

import './SkywardsBanner.scss';


function determineClass(number){
	switch(number){
		case 0:{
		return 'bannerZero'
	}
		case 1: {
		return 'bannerOne'
	}
		case 2:{
		return 'bannerTwo'
	}
		case 3:{
		return 'bannerThree'
		}
		case 4: {
		return  'bannerFour'
		}
	}
}


export class SkywardsBanner extends React.Component{

	render(){
	var  result = ''
	var bannerImages = this.props.images.data
	if(bannerImages !== null && bannerImages.length != 0){
	 	  result = bannerImages.map((image) => 
	 	  
	 	  	<div key={image.ID} className={determineClass(image.ID)}>
		   <img className='bannerImg' src= {require('../../../Images/Banner/' + image.ImageUrl + '.jpg')} alt={image.ImageName} />
		   </div>
			);
			
	 }
	return(
	<div className={"bannerContainer " + (this.props.transition ? 'slideIn' : '' )}>
	{result}
	{result}
	</div>
	
	);
	}
}

SkywardsBanner.defaultProps = {
	images : [],
	transition : false,
};
