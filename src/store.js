import { applyMiddleware, createStore} from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from "./reducers"
import gallery from './reducers'
import {loadState, saveState} from './localStorage'

const persitedState = loadState(); 
const middleware = applyMiddleware(promise())

export default createStore(reducer,
	
	persitedState,
	applyMiddleware(thunk)
	)