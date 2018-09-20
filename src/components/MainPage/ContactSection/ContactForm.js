import React from 'react';
import './ContactSection.scss';
import {sendMessage} from '../../../actions/emailActions.js'
import axios from 'axios';

export class ContactForm extends React.Component{
	constructor(props){
	super(props)
	this.state ={
			UserName : '',
			UserEmail : '',
			UserMessage : '',
			send : false,
		}
	}

	change = e => {
			this.setState({
				[e.target.name] : e.target.value,
			})
	}


	onSubmit = (e) => {
		 e.preventDefault();
        // get our form data out of state
        const { UserName, UserEmail, UserMessage } = this.state;
        sendMessage(UserName, UserEmail, UserMessage);

         this.setState({
         	send : true,
         });
      }
	
	render(){
		return(
		<div>
		<div className={"form " + (this.state.send ? "send" : "")} >
		<h3>I'm Currently Based in: Melbourne</h3>

		<p> Drop me a line. I would love to hear from you.</p>
		<h4>Name</h4>

		<input placeholder="Name" 
		className="formInput" 
		value={this.state.UserName} 
		name="UserName"
		onChange = {e => this.change(e)}
		/>


		<h4>Email</h4>
		<input placeholder="Email" className="formInput"
		 value={this.state.UserEmail}
		 name="UserEmail"
		 onChange = {e => this.change(e)}
		 />
		<h4>Message</h4>
		<textarea placeholder="Message" value={this.state.UserMessage}
		value={this.state.UserMessage}
		name="UserMessage"
		onChange = {e => this.change(e)}
		/>
		<button
		onClick={e => this.onSubmit(e)}
		>Get in touch</button>
		</div>
		<div className={"form " + (this.state.send ? "display"  : "noDisplay")}>
		<h3>Message Sent. I will be in touch shortly</h3>
		</div>
		</div>

		)
	}
}