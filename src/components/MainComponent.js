import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishdetailComponent  from './DishdetailComponent';
import {DISHES} from '../shared/dishes';


class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    };
  }
  onDishSelect(dish){
    this.setState({selectedDish:dish})
}

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
            <div className="container">
            <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
            </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick ={(dishId)=>this.onDishSelect(dishId)} />
        <DishdetailComponent dish={this.state.dishes.filter((e)=>e.id===this.state.selectedDish)}/>
      </div>
    );
  }
}

export default Main;
