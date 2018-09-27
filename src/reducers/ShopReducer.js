export default function reducer(state={
	fetching: false,
	products:[],
	cart: [],

}, action){

switch (action.type){	 
		case "FETCHING_PRODUCTS" : {
			return{
				...state,
				fetching: true,
			}
		}
		case "FETCH_PRODUCTS_FUFILLED": {
			;
			return{
				...state,
				products: action.payload,
			}
		}
		case "ADDED_TO_CART" : {
			return{
				...state,
				cart : state.cart.concat(action.payload),
			}
		}
		default:{
			return{
				...state,
			}
		}
	}
}