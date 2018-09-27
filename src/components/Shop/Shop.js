import React from 'react';
import {fetchProducts} from '../../actions/shopActions';
import {ShopSection} from './';
import store from '../../store';
import StoreLogo from '../../icons/StoreLogo.svg';
import {connect} from "react-redux";
import './ShopStyles.scss';

@connect((store) => {
	return{
		products : store.shop.products,
	}
})

export class Shop extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			loaded : false,
		};
	}

	componentDidMount(){
		this.props.dispatch(fetchProducts())
	}
  
	render(){
		console.log()
		return(
			<div className="storePage">
				<img src={StoreLogo} className={"Title " +(this.state.loaded ? "enter" : "")}/>
				
				<ShopSection className="storeSection" products={store.getState().shop.products}/>
				
			</div>
		);
	}
} 