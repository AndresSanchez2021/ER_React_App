import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {connect } from 'react-redux';
import {addComment,fetchDishes,fetchPromos,fetchComments} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';



const mapStateToProps = state =>{
  return{
    dishes: state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}
const mapDispatchToProps = dispatch =>({ /* con esto traemos funciones que almacenamos en nuentro redux */
   addComment : (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
   fetchDishes : ()=> {dispatch(fetchDishes())},
   fetchComments : ()=> {dispatch(fetchComments())},
   fetchPromos : ()=> {dispatch(fetchPromos())},
   resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
})

class Main extends Component{
  constructor(props){
    super(props);
    
  } 
  
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render(){
    console.log(this.props);
    const HomePage = ()=>{
      return(
        <Home 
          dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
          dishesLoading ={this.props.dishes.isLoading}
          dishesErrMess= {this.props.dishes.errMess}

          promotion={this.props.promotions.promotions.filter((promo)=>promo.featured) [0]}
          promotionLoading ={this.props.promotions.isLoading}
          promotionErrMess= {this.props.promotions.errMess}
          
          leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    }
    const DishWithId= ({match})=>{
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        isLoading ={this.props.dishes.isLoading}
        errMess= {this.props.dishes.errMess}

        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        commentsErrMess= {this.props.comments.errMess}
        addComment={this.props.addComment}
      />
      );
    }
    const AboutPage = ()=><About leaders={this.props.leaders}/>
    
    
    
    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.props .dishes}/>} />
            <Route path="/menu/:dishId" component={DishWithId}/>
            <Route exact path ="/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
            <Route exact path ="/aboutus" component={AboutPage}/>
            <Redirect to="/home"/>
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
