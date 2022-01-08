import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';


class Menu extends Component {


    componentDidMount() {
        
    }
    
    render(){
        const menu=this.props.dishes.map(dish=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.props.onClick(dish.id)}>
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
            </div>
        );
    }
}

export default Menu;