import React from 'react';
import './ArtPreviewStyles.scss';


 
export const ArtPreview = (props) => {



	
		if(props.show != true){
			return(
				<div/>
				)
		}else{
			return(
			<div className="popUp start">
				<div className="cover" onClick={this.exitPreview.bind(this)}/>
				<div className="viewSection">
				 <img className="ArtWorkImg" src={props.prevImg} alt={props.prevTitle} />
					<div className="PieceContent">
					<h1 className="pieceTitle">{props.prevTitle}</h1>
					<p className='blurb'>{props.prevBlurb}<br/><br/> Completed in {props.prevYear}<br/>{props.prevMedium}</p>
						<button className='btn'>Confirm Upload</button>
						<button className="exit" onClick={this.exitPreview.bind(this)}>X</button>
					</div>
				</div>
			</div>
			)
		}
	}