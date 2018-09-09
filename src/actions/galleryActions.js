import axios from "axios";


export function fetchPaintings() {
	return function(dispatch){
	var url = process.env.REACT_APP_API_URL + "art"
	axios.get(url)
		.then(response => {
		dispatch({type: "FETCH_PAINTINGS_FUFILLED", payload: response.data})

		
		})
	}
	
}

export function finalize() {
	return function(dispatch){
		dispatch({type: "ALL_FETCHED"})

		
		
	}

	}


