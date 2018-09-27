import React from 'react';
import {CartIcon} from '../../../icons/cart.png';
import {connect} from "react-redux";
import store from '../../../store';


@connect((store) => {
	return{
		cart : store.shop.cart,
	}
})
export default class Cart extends React.Component{
	constructor(props){
	super(props);
	this.state = {
		empty : true,
	}





	}




}
