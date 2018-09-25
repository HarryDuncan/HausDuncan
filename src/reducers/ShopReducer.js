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
			return{
				...state,
				products: action.payload,
			}
		}
		case "PRODUCT_ADDED" : {
			return{
				...state,
				cart : state.cart.push(action.payload),
			}
		}
		default:{
			return{
				...state,
			}
		}
	}
}