import React from 'react';
import Aux from '../../../hoc/Aux';
import { transform } from '@babel/core';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li>
                    <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
                </li>
                )
        });
    
    const thePrice = props.getPrice
    
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <ul>
                <li><p>Total Price: <strong>{thePrice}$</strong></p></li>
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Success" clicked={props.confirmed} >Confirm</Button>
            <Button btnType="Danger" clicked={props.canceled}>Cancel</Button>
        </Aux>
    )
};

export default orderSummary;