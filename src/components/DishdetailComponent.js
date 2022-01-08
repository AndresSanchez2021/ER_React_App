import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishdetailComponent extends Component {
    
    componentDidMount() {
        console.log("Dishdetail")
    }
    componentDidUpdate(){
        console.log("Didupdate")
    }
    renderComments(dish){
        const comments = dish.comments.map((comment)=>{
            return(
                <div className="align-left">
                    <p>{comment.comment}</p>
                    <p>--{comment.author}</p>
                </div>
            );
        })
        return comments
    }
    renderDescription(dish){
        if(dish!= null){
            return(
                <div className="row">
                    <div className="col-md-5 col-12">
                        <Card>
                            <CardBody>
                                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>  
                    </div> 
                    
                    <div className="col-md-5 col-12">
                        
                            <CardBody  className="align-left">
                                <h4>Comments</h4>
                                {this.renderComments(dish)}
                            </CardBody>
                        
                    </div> 
                </div>
            );
        }else{return(<div></div>);}

    }
    render() {
        console.log(this.props.dish[0])
        return(
            this.renderDescription(this.props.dish[0])
            
        );
    }
}
export default DishdetailComponent;