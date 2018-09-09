import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import './PaintingObject.scss';



export class PaintingTile extends React.Component{
	
	constructor(props){
	super(props);
		this.onHover = this.onHover.bind(this);
		this.noHover = this.noHover.bind(this);
		this.state ={
			hovered : false,
		}

	}
	onHover(){
		this.setState(
		{hovered : true}	
	);
	}
	
	noHover(){
		this.setState({
			hovered : false,
		})
	}


	render(){

		var piece = this.props.Data;
		
		return(
			<Col className='HomePiece col-md-8' >
		      <Card className="HomeArtWork" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.noHover.bind(this)}>
		      <h1 className={"artTitle " + (this.state.hovered ? "hovered" : "")} >{piece.PaintingTitle}</h1>
		      	<CardImg className="HomeArtWorkImg" src={require('../../Images/Gallery/' + piece.ImageUrl + '.jpg')} alt={piece.PaintingTitle} />
		      </Card>
		      
			</Col>
		);
	}


}

