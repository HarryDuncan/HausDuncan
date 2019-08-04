import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle } from 'reactstrap';
import {addToCart} from '../../actions/shopActions';
import {ProductView} from './ProductView/ProductView.js';
import './ShopStyles.scss';
import store from '../../store';
import {connect} from 'react-redux';

@connect((store) => {
  return{
    loggedIn : store.gallery.loggedIn,
  };
})


export class ProductTile extends React.Component{
	
	constructor(props){
	super(props);
		this.viewImage = this.viewImage.bind(this);
		this.AddToCart = this.AddToCart.bind(this);
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

	AddToCart(){
		this.props.dispatch(addToCart(this.props.Data))
	}

	render(){
		var product = this.props.Data;
		var url = product.imageUrl + '/Main.jpg';
		if (this.state.view === true){
			return(
			<ProductView item={product} show={this.state.view} viewOff={this.viewImage.bind(this)} buyItem={this.AddToCart.bind(this)}/>
			)
		}else{
		return(
		      <Card className="ProductCard">
		      <CardImg className="ProductMainImg" src={require('../../Images/Products/' + url )} alt={product.ProductName} />
		   	  <CardBody className="ProductCardBody">
		      <CardTitle className="ProductTitle">{product.ProductName}</CardTitle>
		      <CardBody className="ProductPrice">AUD ${product.Price}<br/>{product.Blurb}</CardBody>
		      <button className="btn btn-primary" onClick={this.AddToCart.bind(this)}>Add to cart</button>
		      <button className="btn btn-secondary"  onClick={this.viewImage.bind(this)} >View More</button>
		      </CardBody>
		      </Card>
		      
		
		);
	}
		}


}
