import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIngredients from './BurgerIngriedients/BurgerIngredients';

const burger = props => {
    
    //Review this function by looking at the video again
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr, el) => { //This calculates the values of the # of ingredients
        console.log(arr.concat(el))
        return arr.concat(el)
        
    }, []);
    
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please insert Ingredients</p>;
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default burger;