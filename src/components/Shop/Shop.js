import React from 'react';
import {fetchProducts} from '../../actions/shopActions';
import {ShopSection} from './';
import store from '../../store';
import StoreLogo from '../../icons/StoreLogo.svg';
import {Footer} from '../';
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


	componentWillMount(){
		this.props.dispatch(fetchProducts())
	}
	
  	loadPage(){
  		
		setTimeout(function(){
             this.setState({loaded:true});
        }.bind(this),50);
	}





	render(){
		if(this.state.loaded == false){
		this.loadPage()
		}
		return(
			<div className="storePage">
				<img src={StoreLogo} className={"Title " +(this.state.loaded ? "enter" : "")}/>
				<div className="storeSection">
				<ShopSection products={this.state.products}/>
				</div>
			</div>
		);
	}
} 