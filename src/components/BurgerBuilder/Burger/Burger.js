import React from 'react'
import Ingredient from './Ingredient/Ingredient'
import classes from './Burger.module.css'


const burger = (props) => {

    let ingredientsList = []
    // for (let i = 0; i < ingredients.length; i++) {
    //     let item = ingredients[i]

    for (let item of props.ingredients) {

        for (let j = 0; j < item.count; j++) {
            ingredientsList.push(<Ingredient type={item.label} key={item.id + '_' + j} />)
        }
    }

    return (
        <div className={classes.Burger}>
            <Ingredient type='BreadTop' />

            {ingredientsList}

            <Ingredient type='BreadBottom' />
        </div>
    )
}

export default burger