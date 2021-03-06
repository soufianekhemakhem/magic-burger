import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const buildControls = (props) => {

    let ingredientsControls = []

    for (let item of props.ingredients) {
        ingredientsControls.push(
            <BuildControl
                label={item.label}
                key={item._id}
                added={() => { props.addOrRemoveIngredient(item.id, 'add') }}
                removed={() => { props.addOrRemoveIngredient(item.id, 'remove') }}
                // disableRemoving={item.count === 0 ? true : false}
                disableRemoving={item.count === 0}
                disableAdding={item.count === item.maxCount}
            />
        )
    }


    console.log('[BuildControls.js] rendering')


    return (
        <div className={classes.BuildControls}>
            <p>Total Price : {props.totalPrice} DT</p>

            {ingredientsControls}

            <button className={classes.OrderButton} onClick={props.showOrHideSummary}>Order Now</button>
        </div>
    )
}

export default buildControls




