import React from 'react';
import {GalleryTile} from './'
import { Container} from 'reactstrap';
import './PaintingGallery.scss';


export class PaintingGallery extends React.Component{
	constructor(props){
		super(props);
		
	}




	render(){

	
	 var  result = ''
	 var painting = this.props.art.data
	 let isIE = /*@cc_on!@*/false || !!document.documentMode;
	 
	if(painting !== null && painting.length !== 0){
	 	  result =  
	 	  	painting.map(piece => (
	  			<GalleryTile Data={piece} key={piece.ID}/>
      			)
	 	  	)
	 	  }

		 	  				    	  		
			    		
			
	
	
		return(
			<Container className={ "container-fluid " + (isIE? "MainDivIE":  "MainDiv")} >
			{result}
			</Container>
			);
	
} 


}

