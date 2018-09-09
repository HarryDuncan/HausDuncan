import axios from "axios";



export function sendMessage(UserName, UserEmail, UserMessage) {
	let body =  JSON.stringify({
		name : UserName,
		phone : "",
		email : UserEmail,
		message : UserMessage
	});
	let axiosConfig = {
  headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
  }
};
	
	var postMethod = process.env.REACT_APP_API_URL + 'sendArt';
	axios.post(postMethod, body, axiosConfig)
	
		
	
}
