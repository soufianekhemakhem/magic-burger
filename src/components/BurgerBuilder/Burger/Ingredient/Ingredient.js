import React from 'react'
import classes from './Ingredient.module.css'


const ingredient = (props) => {

    console.log('[Ingredient.js] rendering')

    let ingredientElement

    switch (props.type) {
        case 'BreadTop':
            ingredientElement = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}> </div>
                    <div className={classes.Seeds2}> </div>
                </div>
            )
            break;

        case 'BreadBottom':
            ingredientElement = <div className={classes.BreadBottom}> </div>
            break;

        case 'Cheese':
            ingredientElement = <div className={classes.Cheese}> </div>
            break;

        case 'Salad':
            ingredientElement = <div className={classes.Salad}> </div>
            break;

        case 'Meat':
            ingredientElement = <div className={classes.Meat}> </div>
            break;

        case 'Escalope':
            ingredientElement = <div className={classes.Escalope}> </div>
            break;

        default:
            ingredientElement = null
            break;
    }

    return ingredientElement

}

export default ingredient