import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import {loadState, saveState} from './localStorage';
require('dotenv').config();


store.subscribe( () => {
	saveState({
		
		
	})
});



ReactDOM.render(<Provider store={store}>
	<App />
	</Provider>


	, document.getElementById('root'));
registerServiceWorker();
