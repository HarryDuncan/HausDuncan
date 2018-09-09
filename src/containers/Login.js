import React from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from 'react-dom';
import {LoginPage} from '../components/DashBoard';
import {Footer} from '../components';
import './Sections.scss';


export const Login = (props) => {
	return(
		<div className="divWrapper">
		<LoginPage/>
		</div>
		)
}