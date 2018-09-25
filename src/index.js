import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {LoadingPage} from './components';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
require('dotenv').config();



 

ReactDOM.render(
	<Provider store={store}> 
	<App/>
	</Provider>


	, document.getElementById('root'));
registerServiceWorker();
