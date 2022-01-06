import React, {Component} from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class Menu extends Component {

    constructor(props){
        super(props);
        this.state={
            selectesDish:null
        };
    }
    onDishSlect(dish){
        this.setState({selectesDish:dish})
    }
    renderDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return(
                <div></div>
                
            );
        }
    }
    render(){
        const menu=this.props.dishes.map(dish=>{
            return(
                <div key={dish.id} className="col-12 col-md-3 m-1">
                    <Card onClick={()=> this.onDishSlect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle heading>{dish.name}</CardTitle>
                            {/* <p>{dish.description}</p>  */}
                        </CardImgOverlay>
                    </Card>
                </div>
               /*  <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>
                                {dish.name}
                            </Media>
                            <p>{dish.description}</p> 
                        </Media>
                    </Media>
                </div> */
            ); 
        });
         
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectesDish )}
                </div>
            </div>
        );
    }
}

export default Menu;