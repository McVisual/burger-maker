import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // A way to transform an object of key values pairs into an array value burger of ingredients
    // Value of the object is important to know how many ingredients we need
    // Key is important to see what ingredients we need
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients.</p>;
        }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            { transformedIngredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;