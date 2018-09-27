import React from 'react';
import {ThumbNails} from './';
import './ProductViewStyles.scss';


 
export const ProductView = (props) => {


		var url = props.item.imageUrl + '/Main.jpg';

		function displayShut() {
			props.viewOff();
		}
	
		function AddToCart() {
			props.buyItem();
		}
		if(props.show !== true){
			return(
				null
				)
		}else{
			return(
			<div className="popUp start">
				<div className="cover" onClick={displayShut.bind(this)}/>
				<div className="viewSection">
				 <img className="ProductImg" src={require('../../../Images/Products/' + url )} alt={props.item.ProductName} />
					<div className="ProductContent">
					<h1 className="pieceTitle">{props.item.ProductName}</h1>
					<p className='blurb'>{props.item.Blurb}</p>
					<h2 className='price'>{props.item.ProductPrice}</h2>
					<ThumbNails MultiImages={props.item.multiImages}/>
						<button className='btn btn-primary' onClick={AddToCart.bind(this)}>Add to Cart</button>
						<button className="exit" onClick={displayShut.bind(this)}>X</button>
					</div>
				</div>
			</div>
			)
		}
	}