import React from 'react';
import splash from '../icons/splash.svg'
import Logo from '../icons/Logo.svg'
import Vivus from 'vivus';
import '../containers/Sections.scss'


export class LoadingPage extends React.Component {
		constructor(props){
			super(props)
			
		}

	componentDidMount(){
		new Vivus('my-splash', {start: 'autostart' , duration: 2000, file: '../icons/splash.svg'});
	}
	render(){
		return (
		<div className='splashScreen'>
		<p> loading </p>
		<img className='logo' src={Logo}/>
		<img className='start' id="my-splash" src={splash}/>
		</div>
		);
	}
}
