import React from 'react';
import PropTypes from 'prop-types';
import {GalleryTile} from './'
import { Container, Row } from 'reactstrap';
import './PaintingGallery.scss';




export class PaintingGallery extends React.Component{
	constructor(props){
		super(props);
		
	}




	render(){

	
	 var  result = ''
	 var painting = this.props.art.data
	 
	if(painting != null && painting.length != 0){
		const rowCount = painting.length / 3;
		 
		 
	 	  result =  
	 	  	painting.map(piece => (

		 	  			<GalleryTile Data={piece} key={piece.ID}/>
			      		)
	 	  	)
	 	  }

		 	  				    	  		
			    		
			
	
	
		return(
			<Container className="MainDiv container-fluid" >
			{result}
			</Container>
			);
	
} 


}
PaintingGallery.defaultProps = {
	art : [],
};
