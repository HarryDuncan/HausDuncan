import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {AttemptLogin, LoginSuccess} from '../../actions/dashboardActions.js'
import store from "../../store";
import { connect } from 'react-redux';

@connect((store) => {
  return{
    loggedIn : store.gallery.loggedIn,
  };
})


export class LoginPage extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			UserName : '',
			CurrentPassword : '',
			redirect: false,
			loggedIn : store.getState().gallery.loaded,
		};
	}


	change = e => {
			this.setState({
				[e.target.name] : e.target.value,
			})
	}


	onSubmit = (e) =>{
		return AttemptLogin(this.state.UserName, this.state.CurrentPassword).then(
			(res) => {if(res == 'Authenticated'){
				this.props.dispatch(LoginSuccess())
				this.setState({loggedIn : true})
			
			}
		}

			)
		}
	



	render(){
		console.log(this.state.loggedIn)
		if(this.state.loggedIn == true){
				return( <Redirect to='/Dashboard' />)
			}else{
		return(

			<div>
				<h2 className="page-header">Login</h2>
				
				  <div className=" login">
				    <label>Username</label>

				    <input type="text" className="form-control" name="UserName"
				     placeholder="Username" 
				     value={this.state.UserName} 
				    onChange = {e => this.change(e)}/>

				  </div>
				  <div className=" login">
				    <label>Password</label>
				    <input type="password" className="form-control" name="CurrentPassword"
				     placeholder="Password" 
				     value={this.state.Password}
				     onChange = {e => this.change(e)}/>
				  </div>
				  <button onClick={e => this.onSubmit(e)} className="btn btn-default">login</button>
				
				</div>
			
			)
		}
		}
} 