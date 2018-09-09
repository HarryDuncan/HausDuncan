import {combineReducers} from "redux"

import gallery from "./GalleryReducer";
import shop from "./ShopReducer";
import dashboard from "./DashboardReducer";

export default combineReducers({
	gallery , shop, dashboard
})