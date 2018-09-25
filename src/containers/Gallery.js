
import React from 'react';
import { GallerySection} from '../components/Gallery';
import {NavBar, Footer} from '../components';
import MetaTags from 'react-meta-tags';
import './Sections.scss';



export const Gallery = () => {
	return (
			
	       <div className="divWrapper">
	       <MetaTags>
            <title>Haus Duncan Art Gallery</title>
            <meta id="meta-description" name="description" content="The Haus Duncan Art Gallery. Here are all the works that have been created." />
            <meta id="og-title" property="og:title" content="Haus Duncan" />
          	</MetaTags>
	       <GallerySection/>
	       <Footer/>
	       </div>

	);
}
