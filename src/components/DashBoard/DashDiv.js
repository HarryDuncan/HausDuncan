import React from 'react';
import { Route} from "react-router-dom";
import {ContentManagement} from "./ContentManage";
import {MarketPlace} from "./MarketPlace";
import {DashNav, DashboardHome} from './';
import store from '../../store';
import { Redirect } from 'react-router-dom';
import './DashboardStyles.scss';
export class DashDiv extends React.Component {
	constructor(props) {
    super(props);
	this.state = {
		loggedIn : store.getState().gallery.loggedIn,
		}
	}
	render(){
		if(this.state.loggedIn === false){
			return( <Redirect to='/Login' />)
		}else{
			return(
				<div>
				<DashNav/>
				<div>
				<Route path='/Dashboard' exact render={DashboardHome} />
				<Route path='/Dashboard/ContentManagement' render={ContentManagement} />
				<Route path='/Dashboard/MarketPlace' render={MarketPlace} />
				</div>
				</div>
			);
		}
	}
	} 
