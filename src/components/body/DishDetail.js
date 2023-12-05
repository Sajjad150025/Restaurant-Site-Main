import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComment from './LoadComment';
import CommentForm from './CommentForm';
import { baseUrl } from '../../redux/baseUrl';

const DishDetail = props => {

  return (
    <div>
        <Card style={{marginTop: "10px"}}>
            <CardImg top alt={props.dish.name} src={baseUrl + props.dish.image}/>
            <CardBody style={{textAlign: 'left'}}>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>  
                <CardText>Price : {props.dish.price} /-</CardText>
                
                <hr />

                <LoadComment comments={props.comments} commentIsLoading={props.commentIsLoading} />     
                <hr />
                <CommentForm dishId ={props.dish.id} addComment={props.addComment} /> 
            </CardBody>
  </Card>
  </div>
  )  
}

export default DishDetail