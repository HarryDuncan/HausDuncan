import React from 'react';
import '../DashboardStyles.scss';
import {ImageUpload} from '../ImageUpload';
import {UploadArt} from '../../../actions/dashboardActions';
import {UploadToS3} from '../../../actions/S3Actions';
import {FormErrors} from '../../Forms/FormErrors.js';
import {ArtPreview} from '../../ArtComponents';


export class AddProductForm extends React.Component{
	constructor(props){
	super(props)
	this.cancelPreview = this.cancelPreview.bind(this);
	this.finishSubmit = this.finishSubmit.bind(this);
	this.state ={
			Name : '',
			Price : '',
			Blurb : '',
			Stock : '',
			img : '',
			imgURL : '',
			formErrors: {Title: '', Price: '', Stock:''},
			NameValid : false,
			PriceValid : false,
			StockValid : false,
			imgValid : false,
			formValid : false,
			preview : false,
			multiImages : null,
		}
	}

	
	
validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let NameValid = this.state.NameValid;
  let PriceValid = this.state.PriceValid;

  switch(fieldName) {
    case 'Name':
      NameValid = value.length >= 0;
      fieldValidationErrors.Name = NameValid ? '' : 'must have a Name';
      break;
    case 'Price':
      PriceValid = Number.isInteger(parseInt(value));
      fieldValidationErrors.Price = PriceValid ? '': 'must be a number';
      break;
    case 'Stock':
      StockValid = Number.isInteger(parseInt(value));
      fieldValidationErrors.Stock = StockValid ? '': 'must be a number '
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  NameValid: NameValid,
                  PriceValid: PriceValid,
                  StockValid: StockValid
                }, this.validateForm);
}

validateForm() {
  this.setState({
  	formValid: 
  	this.state.NameValid && 
  	this.state.StockValid &&
  	 this.state.PriceValid && 
  	 this.state.imgValid});
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
			this.previewProduct();

		}
       
      }


    finishSubmit = () => {
    	let body = JSON.stringify({
	        	Name : this.state.Name,
	        	Price : this.state.Price,
	        	ImgUrl : this.state.ImgURL,
	        	Blurb : this.state.Blurb,
	        	Stock : this.state.Stock,
	        })
    	UploadProduct(body)
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

		<h4>Name</h4>
		<input placeholder="Name" 
		className="form-control"
		value={this.state.Name} 
		name="Name"
		onChange = {e => this.change(e)}
		/>


		<h4>Price</h4>
		<input placeholder="Price" 
		className="form-control"
		 value={this.state.Price}
		 name="Price"
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
		<textarea placeholder="Stock" value={this.state.Stock}
		className="form-control"
		value={this.state.Stock}
		name="Stock"
		onChange = {e => this.change(e)}
		/>

		<h4>Image</h4>
		<ImageUpload
		 onUpload={this.handleImageUpload.bind(this)}
		  />



	   	<ArtPreview 
	   		show={this.state.preview}
	   		previewName={this.state.Name} 
	   		previewPrice={this.state.Year} 
	   		previewBlurb={this.state.Blurb}
	   		previewStock={this.state.Stock}
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
