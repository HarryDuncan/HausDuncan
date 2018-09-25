import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle } from 'reactstrap';

import {ProductView} from './ProductView/ProductView.js';
import './ShopStyles.scss';





export class ProductTile extends React.Component{
	
	constructor(props){
	super(props);
		this.viewImage = this.viewImage.bind(this);
		this.state ={
			view : false,
		}

	}

	viewImage(){
		this.setState(prevState => ({
  		view: !prevState.view,
  		hovered : false
		}));
	}

	render(){
		var product = this.props.Data;
		var url = product.imageUrl + '/Main.jpg';
		if (this.state.view == true){
			return(
			<ProductView item={product}/>
			)
		}else{
		return(
		      <Card className="ProductCard" onClick={this.viewImage.bind(this)} >
		      <CardImg className="ProductMainImg" src={require('../../Images/Products/' + url )} alt={product.ProductName} />
		   	  <CardBody className="ProductCardBody">
		      <CardTitle className="ProductTitle">{product.ProductName}</CardTitle>
		      <CardBody>AUD ${product.Price}</CardBody>
		      <button className="btn btn-primary">Add to cart</button>
		      </CardBody>
		      </Card>
		      
		
		);
	}
		}


}
