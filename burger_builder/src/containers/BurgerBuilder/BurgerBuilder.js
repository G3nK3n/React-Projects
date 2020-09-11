import React, { Component } from 'react'; 
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4, 
    meat: 1.3, 
    bacon: 0.7
}

class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            salad: 0, 
            bacon: 0, 
            cheese: 0, 
            meat: 0
        }, 
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    //purchasingHandler () does not work if adding a "this" inside the method, which will result an error
    purchasingHandler = () => {
        this.setState({purchasing: true})
    }

    //Takes the Updated Ingredients from the handlers instead of creating a new one.
    updatePurchaseButton (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        
        this.setState({purchasable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            //Must update a state in a immutable way?
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseButton(updatedIngredients);


    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0 ) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            //Must update a state in a immutable way?
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseButton(updatedIngredients);
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert('You Continue! hahaha')
    }
    
    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary getPrice={this.state.totalPrice.toFixed(2)} confirmed={this.purchaseContinueHandler} canceled={this.purchaseCancelHandler} ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientsAdded={this.addIngredientHandler} ingredientsRemoved={this.removeIngredientHandler} 
                    disable={disableInfo} thePrice={this.state.totalPrice} purchasable={this.state.purchasable} ordered={this.purchasingHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;