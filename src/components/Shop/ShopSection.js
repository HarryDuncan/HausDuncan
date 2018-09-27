import React from 'react';
import PropTypes from 'prop-types';
import {ProductTile} from './'
import store from '../../store';
import {Container, Row } from 'reactstrap';
import './ShopStyles.scss';


export class ShopSection extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			products : store.getState().shop.products
		}
	}


	

	render(){

	 var  result = ''
	 var products = this.props.products.data
	 
	if(products != null && products.length != 0){
		const rowCount = products.length / 3;
		 
		 
	 	  result =  
	 	  	products.map(piece => (

		 	  			<ProductTile Data={piece} key={piece.ID}/>
			      		)
	 	  	)
	 	  }else{
	 	  	result =
	 	  	<p>Sorry there are currently no products available yet, follow me on Instagram for the latest updates
	 	  	<br/> Or get in contact with me for a comission</p>
	 	  }

		 	  				    	  		
			    		
			
	
	
		return(
			<Container className="MainDiv container-fluid" >
			{result}
			</Container>
			);
	
} 


}
ShopSection.defaultProps = {
	products : [],
};
