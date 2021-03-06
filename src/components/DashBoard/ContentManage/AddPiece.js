import React from 'react';
import '../DashboardStyles.scss';
import {ImageUpload} from '../ImageUpload';
import {UploadArt} from '../../../actions/dashboardActions';
import {UploadToS3} from '../../../actions/S3Actions';
import {FormErrors} from '../../Forms/FormErrors.js';
import {ArtPreview} from '../../ArtComponents';


export class AddPieceForm extends React.Component{
	constructor(props){
	super(props)
	this.cancelPreview = this.cancelPreview.bind(this);
	this.finishSubmit = this.finishSubmit.bind(this);
	this.state ={
			Title : '',
			Year : '',
			Blurb : '',
			Medium : '',
			img : '',
			imgURL : '',
			formErrors: {Title: '', Year: ''},
			TitleValid : false,
			YearValid : false,
			imgValid : false,
			formValid : false,
			preview : false,
		}
	}

	
	
validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let TitleValid = this.state.TitleValid;
  let YearValid = this.state.YearValid;

  switch(fieldName) {
    case 'Title':
      TitleValid = value.length >= 0;
      fieldValidationErrors.Title = TitleValid ? '' : 'must have a title';
      break;
    case 'Year':
      YearValid = Number.isInteger(parseInt(value));
      fieldValidationErrors.Year = YearValid ? '': ' must be a number';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  TitleValid: TitleValid,
                  YearValid: YearValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.TitleValid && this.state.YearValid && this.state.imgValid});
}
	
	change = e => {
			 const name = e.target.name;
 			 const value = e.target.value;
 
			 this.setState({[name]: value}, 

                () => { this.validateField(name, value) });
	}



   previewPiece = () => {
   	
   	this.setState({
   		preview : true
   	})
   }

   cancelPreview = () => {
   	this.setState({
   		preview : false
   	})
   }


	onSubmit = (e) => {

		e.preventDefault();
		if(this.state.formValid === true){
			this.previewPiece();

		}
       
      }


    finishSubmit = () => {
    	let body = JSON.stringify({
	        	Title : this.state.Title,
	        	Year : this.state.Year,
	        	ImgUrl : this.state.ImgURL,
	        	Blurb : this.state.Blurb,
	        	Medium : this.state.Medium,
	        })
    	UploadArt(body)
    	UploadToS3(this.state.img, this.state.ImgURL)
    	this.setState({
    		preview : false
    	})
    }

     handleImageUpload = (image, imgUrl, imagePreviewURL) => {
     	console.log(image)
     	this.setState({
     		img : imagePreviewURL,
     		ImgURL : imgUrl,
     		imgValid : true
     		}, () => {
   			 	this.validateForm() 	
			})
     
    }

	
	


	render(){
		
		return(

		<div className="InputForm">

		<div className='panel panel-default'>
 		<FormErrors formErrors={this.state.formErrors} />
		</div>

		<h4>Title</h4>
		<input placeholder="Title" 
		className="form-control"
		value={this.state.Title} 
		name="Title"
		onChange = {e => this.change(e)}
		/>


		<h4>Year</h4>
		<input placeholder="Year" 
		className="form-control"
		 value={this.state.Year}
		 name="Year"
		 onChange = {e => this.change(e)}
		 />


		<h4>Blurb</h4>
		<textarea placeholder="Blurb" value={this.state.Blurb}
		className="form-control"
		value={this.state.Blurb}
		name="Blurb"
		onChange = {e => this.change(e)}
		/>


		<h4>Medium</h4>
		<textarea placeholder="Medium" value={this.state.Medium}
		className="form-control"
		value={this.state.Medium}
		name="Medium"
		onChange = {e => this.change(e)}
		/>

		<h4>Image</h4>
		<ImageUpload
		 onUpload={this.handleImageUpload.bind(this)}
		  />



	   	<ArtPreview 
	   		show={this.state.preview}
	   		prevTitle={this.state.Title} 
	   		prevYear={this.state.Year} 
	   		prevBlurb={this.state.Blurb}
	   		prevMedium={this.state.Medium}
	   		prevImg={this.state.img}
	   		viewOff={this.cancelPreview.bind(this)}
	   		confirmUpload={this.finishSubmit.bind(this)}
	   		/>

		<button
		onClick={e => this.onSubmit(e)}
		className="btn btn-primary uploadArtBtn"
		>Upload Piece</button>
		</div>

		)
	}

}
