import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


class Menu extends Component {


    componentDidMount() {
        
    }
    
    render(){
        const menu=this.props.dishes.map(dish=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card       >
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardImgOverlay body className="ml-5">
                                <CardTitle heading>{dish.name}</CardTitle>
                                {/* <p>{dish.description}</p>  */}
                            </CardImgOverlay>
                        </Link>
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
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;