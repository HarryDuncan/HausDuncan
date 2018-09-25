
import axios from "axios";



export  function UploadToS3 (file, filename){
  let body = JSON.stringify({
      key: filename
  })
  var url = process.env.REACT_APP_API_URL + 'S3Resolve/signs3Bucket'
  let axiosConfig = {
  headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
      }
  }
  axios.post(url, body, axiosConfig )
  .then(response => {
   let options = {
    headers: {
      "Content-Type": 'jpg'
    }
   };
   axios.put(response.data, file, options)
   .then(response => {
    
   })
    })

}
