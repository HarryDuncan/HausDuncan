import React from 'react';
import './HomeSectionStyles.scss';


export class MobileHero extends React.Component{
	constructor(props){
		super(props);
		this.changeSlide = this.changeSlide.bind(this)
		this.state = {
			item : 0,
		}
	}


	changeSlide = () =>{
		if(this.state.item != 4){
			this.setState({
				item : this.state.item + 1
			})
		}else{
			this.setState({
				item : 0
			})
		}
	}

	componentDidMount() {
		this.interval = setInterval(this.changeSlide.bind(this) , 2000);
	}
	componentWillUnmount() {
  	clearInterval(this.interval);
	}


	render(){
	
	var bannerImages = this.props.images.data
	return(
	<div>
	 <div className='wrapper'>
		   <img className={'HeroImg ' + 'in'} src= {require('../../../Images/Banner/' + bannerImages[this.state.item].ImageUrl + '.jpg')} 
		   alt={bannerImages[this.state.item].ImageName} />
	</div>
	<ol className="carousel-indicators">
                    <li className={this.state.item == 0 ? "active": ""}></li>
                    <li className={this.state.item == 1 ? "active": ""} ></li>
                    <li className={this.state.item == 2 ? "active": ""} ></li>
                    <li className={this.state.item == 3 ? "active": ""} ></li>
                    <li className={this.state.item == 4 ? "active": ""} ></li>
    </ol>
	</div>
	
	);
	}
}

MobileHero.defaultProps = {
	images : [],
	transition : false,
};
