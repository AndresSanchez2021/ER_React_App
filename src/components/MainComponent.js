import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishdetailComponent  from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {DISHES} from '../shared/dishes';


class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
    };
  }
  

  render(){
    const HomePage = ()=><Home/>
    
    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>} />
            <Redirect to="/home"/>
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
