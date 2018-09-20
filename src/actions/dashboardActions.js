import axios from "axios";

//Login/Logout Functions

export function AttemptLogin(UserName, Password) {
	
			let body =  JSON.stringify({
				name : UserName,
				pass : Password
			});
			let axiosConfig = {
		  headers: {
		      'Content-Type': 'application/json',
		      "Access-Control-Allow-Origin": "*",
		  }
		};

			var postMethod = process.env.REACT_APP_API_URL + 'login';
			
			return axios.post(postMethod, body, axiosConfig)
				.then(response =>{
					return response.status;
						
					
		  		})
			
			
				
			}	

export function LoginSuccess() {
	return function (dispatch) {
		dispatch({type : "LOGGED_IN" })
	}
}


//Content Managment Actions

export function ValidateArt(body){
	
}


export function UploadArt(body){
	let axiosConfig = {
	headers: {
		      'Content-Type': 'application/json',
		      "Access-Control-Allow-Origin": "*",
		  }
	}
	var postArt = process.env.REACT_APP_API_URL + 'NewPiece';
	return axios.post(postArt, body, axiosConfig)
		.then(response => {
			return response.data;
		})
}