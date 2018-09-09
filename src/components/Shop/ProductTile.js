import React from 'react';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
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
		var url = product.ImageUrl;
		if (this.state.view == true){
			return(
			<ProductTileView item={product}/>
			)
		}else{
		return(
		      <Card className="ProductCard" onClick={this.viewImage.bind(this)} >
		      <CardImg className="ProductMainImg" src={require('../../Images/Products/' + url + '/Main.jpg')} alt={product.ProductName} />
		   	  <CardBody>
		      <CardTitle>{product.PaintingName}</CardTitle>
		      <CardBody>{product.Price}</CardBody>
		      <button className="btn btn-primary">Add to cart</button>
		      </CardBody>
		      </Card>
		      
		
		);
	}
		}


}

export const ProductTileView = () =>{


	<h1>TODO</h1>
}  