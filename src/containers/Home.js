
import React from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from 'react-dom';
import {HomeDiv} from '../components/MainPage/HomeSection';
import {GalleryDiv} from '../components/MainPage/PaintingSection';
import {ContactDiv} from '../components/MainPage/ContactSection';
import {Footer} from '../components';
import MetaTags from 'react-meta-tags';
import './Sections.scss';



export const Home = (props) => {
	return (
	       <div className="divWrapper">
	       <MetaTags>
            <title>Haus Duncan Art</title>
            <meta id="meta-description" name="description" content="Haus Duncan. Here you can view past works, get in contact with the artist and buy limited edition prints." />
            <meta id="og-title" property="og:title" content="Haus Duncan" />
          	</MetaTags>
	       <HomeDiv/>
	       <GalleryDiv/>
	      <ContactDiv/>
	       <Footer/>
	       </div>

	);
}
