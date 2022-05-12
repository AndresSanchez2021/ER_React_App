import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Button, Modal, ModalHeader, ModalBody, Label, Form,Row,Col} from 'reactstrap'; // to made a uncontrolled form
import {Control, LocalForm, Errors} from 'react-redux-form'; //use to take control over forms
import {Link} from 'react-router-dom';



const maxLength = (len) => (val) => !(val) ||  (val.length <= len);
const minLength = (len) => (val) => (val) &&  (val.length > len);



class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    toggleModal(){this.setState({isModalOpen:!this.state.isModalOpen})}
    handleSubmit(values){console.log(JSON.stringify(values));}

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg ">  Submit Comment</span>
                </Button>

                
                <Modal isOpen={this.state.isModalOpen} toogle="">
                    <ModalHeader isOpen={this.state.isModalOpen} toogle="">
                        <div className="title">Submit Comment</div>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(value)=>this.handleSubmit(value)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select  
                                        className="form-control"
                                        model=".rating" 
                                        id="rating"
                                        name="rating"
                                        placeholder=""
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text className="form-control" placeholder="Name"
                                        model=".name"
                                        id="name"
                                        name="name"
                                        validators={{maxLength:maxLength(15),minLength:minLength(2)}}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model = ".name"
                                        show="touched"
                                        messages={
                                            {
                                                minLength:'Must be greater than 2 characters',
                                                maxLength:'Must be 15 characters or less'
                                            }
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={12} htmlFor="comment">Comment</Label>
                                <Col md={12}>
                                    <Control.textarea className="form-control" placeholder="Your comments"
                                        model=".comment"
                                        id="commetn"
                                        name="comment"
                                        rows="6"
                                    />
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
function RenderDish({dish}){
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}){
    console.log(comments);
    if(comments != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment)=>{
                        return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} </p>
                            </li> 
                        );
                    })}
                </ul>
                <CommentForm/>
            </div>
        );
    }else return(<div></div>);
}

const DishDetail = (props)=>{
    console.log(props.dish);
    console.log(props.comments);
    if(props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        );
    else return(<div></div>);
}

export default DishDetail;