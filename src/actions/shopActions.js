import axios from "axios";


export function fetchProducts() {
	return function(dispatch){
	var url = process.env.REACT_APP_API_URL + "products"
	axios.get(url)
		.then(response => {
		dispatch({type: "FETCH_PAINTINGS_FUFILLED", payload: response.data})

		
		})
	}
	
}

