import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home, Gallery, Store, Dashboard, Login } from './containers';
import {connect} from "react-redux";
import {fetchPaintings} from "./actions/galleryActions";
import {fetchBanner} from "./actions/bannerActions";
import {fetchProducts} from "./actions/shopActions";
import store from './store';
import {LoadingPage} from "./components";
require('dotenv').config();

@connect((store) => {
  return{
    paintings: store.gallery.paintings,
    banner: store.gallery.bannerImages,
    loggedIn : store.gallery.loggedIn,
    cart : store.shop.cart,
  };
})

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
    loading: true,
    loggedIn : store.getState().gallery.loggedIn,
    cart : store.getState().shop.cart,

   }

   }
 
   
  componentDidMount(){
      this.props.dispatch(fetchBanner()),
      this.props.dispatch(fetchPaintings())
     if(this.state.loading){
       setTimeout(() => this.setState({ loading: false }), 1500);
      }
  }
   
  render() {

    
      if(this.state.loading){
        return(
          <LoadingPage/>
          );
      }else{
        return(
      <BrowserRouter>
      <Switch>
      <Route exact path="/" exact render={Home} />
      <Route path='/Gallery' render={Gallery} />
      <Route path='/Store' exact component={Store} />
      <Route path='/Login' exact component={Login} />
      <Route path='/Dashboard' component={Dashboard} />
      </Switch>
      </BrowserRouter>
    );
  }
  
  }
}

export default App;