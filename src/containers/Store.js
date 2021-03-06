
import React from 'react';
import {NavBar, Footer} from '../components';
import {Shop} from '../components/Shop';
import MetaTags from 'react-meta-tags';
import './Sections.scss';
import {connect} from "react-redux";
import {fetchProducts} from '../actions/shopActions';



export const Store = () => {
	return (
			
	       <div className="divWrapper">
	       <MetaTags>
            <title>Haus Duncan Shop</title>
            <meta id="meta-description" name="description" content="Haus Duncan Shop. Here you can buy limited edition prints and pay securley with stripe." />
            <meta id="og-title" property="og:title" content="Haus Duncan" />
          	</MetaTags>
	       <NavBar/>
	       <Shop/>
	       <Footer/>
	       </div>

	);
}
