import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home, Gallery, Store, Dashboard, Login } from './containers';
import {connect} from "react-redux";
import {fetchPaintings} from "./actions/galleryActions";
import {fetchBanner} from "./actions/bannerActions";
import store from './store';
import {LoadingPage} from "./components";
require('dotenv').config();

@connect((store) => {
  return{
    paintings: store.gallery.paintings,
    banner: store.gallery.bannerImages,
    loggedIn : store.gallery.loggedIn,
  };
})

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
    preLoaded: false,
    loaded: false,
    loggedIn : store.getState().gallery.loggedIn,
   }

   store.subscribe(() => {
    
    if( this.state.preLoaded == false){
      this.setState({
        preLoaded : true,
        })
    }else{
        this.setState({
          loaded:true
        });
      }
      });
    }

 
   

  componentWillMount(){
  this.props.dispatch(fetchBanner()),
  this.props.dispatch(fetchPaintings())
    
    
  }
   
  render() {
    if(this.state.loaded == false){
      return(<LoadingPage/>);
    }else{
     
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" exact render={ props => <Home{...props}/>}/>
      <Route path='/Gallery' render={Gallery}/>
      <Route path='/Store' exact component={Store}/>
      <Route path='/Login' exact component={Login}/>
      <Route path='/Dashboard' component={Dashboard}/>
      </Switch>
      </BrowserRouter>
      
    );
  }
  }
}

export default App;