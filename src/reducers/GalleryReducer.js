export default function reducer(state={
	loading:false,
	loaded:false,
	loggedIn: true,
	paintings:[],
	bannerImages:[],
}, action){


	switch (action.type){	 
		case "All_FETCHED": {
			return{
				...state,
				loaded: true,
			}
		}
		case "FETCH_PAINTINGS": {
			return{...state, fetching:true}
		}
		case "FETCH_PAINTINGS_FUFILLED": {
			return{
				...state,
				paintings: action.payload,
			}
		}
		case "FETCH_BANNER_FUFILLED": {
			return{
				...state,
				bannerImages: action.payload,
			}
		}
		case "MESSAGE_SENT": {
			return {
				...state,
				
			}
		}
		case "LOGGED_IN":{
			return {
				...state,
				loggedIn :true,
			}
		}
	default:{
			return{
				...state
			}
		}
	}
}