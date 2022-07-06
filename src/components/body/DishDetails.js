import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap";
import LoadComments from "./LoadComments";


const DishDetails = props => {
    return (
        <div>
<Card style={{marginTop: "10px"}}>
    <CardImg top src = {props.dish.image} alt = {props.dish.name}/>
    <CardBody style= {{textAlign: "left"}}>
        <CardTitle> {props.dish.name}</CardTitle>
        <CardText>
           {props.dish.description}
        </CardText>
        <CardText>
            {props.dish.price}/-
        </CardText>
        <hr />
        <LoadComments comments ={props.comments} />
     </CardBody>
</Card>
        </div>
    );
}

export default DishDetails;