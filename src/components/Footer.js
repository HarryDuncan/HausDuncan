import React from 'react';
import insta from '../icons/Insta.svg';
import '../containers/Sections.scss';
export const Footer = () =>{
	return(
	<div className="Footer">
	<a href="https://www.instagram.com/hazaduncs/" target="_blank" rel="noopener noreferrer" ><img alt={'instagram'} src={insta} /></a>
	</div>


	)
}