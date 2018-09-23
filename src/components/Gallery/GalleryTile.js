import React from 'react';
import PropTypes from 'prop-types';
import {ArtView} from './';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import './PaintingGallery.scss';






export class GalleryTile extends React.Component{
	
	constructor(props){
	super(props);
		this.onHover = this.onHover.bind(this);
		this.noHover = this.noHover.bind(this);
		this.viewImage = this.viewImage.bind(this);
		this.state ={
			hovered : false,
			view : false,
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

	viewImage(){
		this.setState(prevState => ({
  		view: !prevState.view,
  		hovered : false
		}));
	}

	render(){
		var piece = this.props.Data;
		var url = piece.ImageUrl;
		var image = '.Images/Gallery/' + url + '.jpg';
		if (this.state.view == true){
			return(
			<ArtView 
			show={this.state.view}
	   		PaintingTitle={piece.PaintingTitle} 
	   		PaintingYear={piece.PaintingYear} 
	   		Blurb={piece.Blurb}
	   		Medium={piece.Medium}
	   		url={piece.ImageUrl}
	   		viewOff={this.viewImage.bind(this)}
			/>
			)
		}else{
		return(
			
		      <Card className="GalleryArtWork" onClick={this.viewImage.bind(this)} onMouseOver={this.onHover.bind(this)} onMouseLeave={this.noHover.bind(this)}>
		      <h1 className={"artTitle " + (this.state.hovered ? "hovered" : "")} >{piece.PaintingTitle}</h1>
		      <CardImg className="GalleryArtWorkImg" src={require('../../Images/Gallery/' + url + '.jpg')} alt={piece.PaintingTitle} />
		      </Card>
		      
		
		);
	}
		}


}

