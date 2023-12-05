import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { baseUrl } from '../../redux/baseUrl';

 const MenuItem = props => {
  return (
    <div>
        <Card style={{margin: '10px', padding: '10px', cursor: 'pointer'}} >
            <CardImg
            alt={props.dish.name}
            src={baseUrl + props.dish.image}
            style={{
                height: 270,
                opacity: 0.8
            }}
            width="100%"
            />
            <CardImgOverlay>
                <CardTitle tag="h5" style={{fontSize: '25px', fontWeight: 'bold', color: 'black'}} onClick={props.DishSelect}>
                    {props.dish.name}
                </CardTitle>
            </CardImgOverlay>
        </Card>
    </div>
  )
}

export default MenuItem;