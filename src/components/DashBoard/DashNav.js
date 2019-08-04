import React from 'react';

import {Navbar, NavItem} from 'reactstrap';
import logo from '../../icons/Logo.svg'
import { HashLink as Link } from 'react-router-hash-link';
import { stack as Menu } from 'react-burger-menu'
import '../NavBar.scss';


export const DashNav = () => {

		const isMobile = window.innerWidth <= 900;
		if(isMobile){
			return(
					<Navbar className='MobileNavBar'>
					<img src={logo} alt={'HausDuncanLogo'} />
					<div class="container">
					 <div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
					</div>
					<Menu right className="MobileMenu"width={350}  >
					<a>
					<Link className='link' to="/">Home</Link>
					</a>
					<a>
					<Link className='link' to="/Dashboard">Dashboard</Link>
					</a>
			        <a>
			        <Link className='link' to='/Dashboard/ContentManagement'>Content Management</Link>
			        </a>
			        <a>
			       	<Link className='link'  to='/Dashboard/MarketPlace'>Market Place</Link>
			        </a>
			     	</Menu>
			     	</Navbar>

					)

		}else{

		return(
			
			<Navbar className='mainNav'>
			<NavItem className='nav-item'>
			<Link className='link' to="/Dashboard">Dashboard</Link>
			</NavItem>
			<NavItem>
			<Link className='link' to='/Dashboard/ContentManagement'>Content Management</Link>
			</NavItem>
			<NavItem>
			<Link className='link'  to='/Dashboard/MarketPlace'>Market Place</Link>
			</NavItem>
			</Navbar>	
		);
		}
	
} 