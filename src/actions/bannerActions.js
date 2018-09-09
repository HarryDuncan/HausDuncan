import axios from "axios";

export function fetchBanner() {
	var callbannerImages = process.env.REACT_APP_API_URL + 'banner';
	return function(dispatch){
	axios.get(callbannerImages)
		.then(response => {
		dispatch({type: "FETCH_BANNER_FUFILLED", payload: response.data})
	
		})
	}
	
}