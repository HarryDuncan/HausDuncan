import React from 'react';
import {MapContainer} from './GoogleMap';
import {ContactForm} from './ContactForm';
import instaLogo from '../../icons/Insta.svg';
import './ContactSection.scss';

export const ContactDiv =() => {
	
		return(
			<div id='Contact'className="contact">
			<MapContainer/>
			<ContactForm/>
			</div>
		);
} 

