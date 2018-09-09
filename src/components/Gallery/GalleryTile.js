import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import './PaintingGallery.scss';
import { HashLink as Link } from 'react-router-hash-link';





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
			<div className="popUp start">
			<div className="cover" onClick={this.viewImage.bind(this)}/>
			<div className="viewSection">
		      <img className="ArtWorkImg" src={require('../../Images/Gallery/' + url + '.jpg')} alt={piece.PaintingTitle} />
				<div className="PieceContent">
				<h1 className="pieceTitle">{piece.PaintingTitle}</h1>
				<p className='blurb'>{piece.Blurb}<br/><br/> Completed in {piece.PaintingYear}<br/>{piece.Medium}</p>
				<button className='btn'><Link className="none" to='/Store'>Buy Print</Link></button>
				<button className="exit" onClick={this.viewImage.bind(this)}>X</button>
				</div>
			</div>
			</div>
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

