export default function reducer(state={
	fetching: false,
	products:[],

}, action){

switch (action.type){	 
		case "FETCHING_PRODUCTS" : {
			return{
				...state,
				fetching: true,
			}
		}
		case "FETCH_PRODUCTS_FUFILLED": {
			return{
				...state,
				products: action.payload,
			}
		}
		default:{
			return{
				...state,
			}
		}
	}
}