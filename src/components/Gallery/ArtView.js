import React from 'react';
import './ArtViewStyles.scss';
import { HashLink as Link } from 'react-router-hash-link';

 
export const ArtView = (props) => {

		function displayShut() {
			props.viewOff();
		}

		
		if(props.show !== true){
			return(
				<div/>
				)
		}else{
			return(
			<div className="popUp start">
			<div className="cover" onClick={displayShut.bind(this)}/>
			<div className="viewSection">
		      <img className="ArtWorkImg" src={require('../../Images/Gallery/' + props.url + '.jpg')} alt={props.PaintingTitle} />
				<div className="PieceContent">
				<h1 className="pieceTitle">{props.PaintingTitle}</h1>
				<p className='blurb'>{props.Blurb}<br/><br/> Completed in {props.PaintingYear}<br/>{props.Medium}</p>
				<button className='btn'><Link className="none" to='/Store'>Buy Print</Link></button>
				<button className="exit" onClick={displayShut.bind(this)}>X</button>
				</div>
			</div>
			</div>
			)
		}
	}