import React from 'react';
import './ProductViewStyles.scss';


 
export const ProductView = (props) => {


		function displayShut() {
			props.viewOff();
		}
		function uploadItem(){
			props.confirmUpload();
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
				 <img className="ProductWorkImg" src={props.prevImg} alt={props.prevTitle} />
					<div className="ProductContent">
					<h1 className="pieceTitle">{props.prevTitle}</h1>
					<p className='blurb'>{props.prevBlurb}<br/><br/> Completed in {props.prevYear}<br/>{props.prevMedium}</p>
						<button className='btn' onClick={uploadItem.bind(this)}>Confirm Upload</button>
						<button className="exit" onClick={displayShut.bind(this)}>X</button>
					</div>
				</div>
			</div>
			)
		}
	}