import React from 'react';
import {Navbar,NavItem} from 'reactstrap';
import logo from '../icons/Logo.svg'
import { HashLink as Link } from 'react-router-hash-link';
import { stack as Menu } from 'react-burger-menu'
import './NavBar.scss';


export class NavBar extends React.Component{
	
	render(){
		const isMobile = window.innerWidth <= 900;
		if(isMobile){
			return(
					<Navbar className='MobileNavBar'>
					<img src={logo} alt="logo"/>
					<div className="container">
					 <div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
					</div>
					<Menu right className="MobileMenu"width={200}  >
					
					<Link className='link' to="/">Home</Link>
					
			        <Link className='link' to="/Gallery">Gallery</Link> 
			        
			        <Link className='link' to='/Store'>Store</Link>
			        
			     	</Menu>
			     	</Navbar>

					)

		}else{

		return(
			
			<Navbar className='mainNav'>
			<NavItem className='nav-item'>
			<Link className='link' to="/">Home</Link>
			</NavItem>
			<NavItem>
			<Link className='link' to='/Gallery'>Gallery</Link>
			</NavItem>
			<NavItem>
			<Link className='link' to='/Store'>Store</Link>
			</NavItem>
			<NavItem>
			<Link smooth to='/#Contact' className='link' >Contact</Link>
			</NavItem>
			</Navbar>	
		);
		}
	}
} 