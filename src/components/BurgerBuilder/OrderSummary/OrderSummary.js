import React from 'react'
import classes from './OrderSummary.module.css'

const orderSummary = (props) => {

    // let ingredientsSummary = []

    // for (let item of props.ingredients) {
    //     ingredientsSummary.push(
    //         <div>
    //             <li>{item.label}: {item.count} </li>
    //         </div>
    //     )
    // }

    let ingredientsSummary = props.ingredients.map((item) => {
        return (
            <li key={item.id}>
                {item.label}: {item.count}
            </li>
        )
    })

    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>

            <ul>
                {ingredientsSummary}
            </ul>

            <p><strong>Total Price : {props.totalPrice} DT</strong></p>
            <p> Continue to checkout ?</p>

            <button className={classes.Button + ' ' + classes.Danger} onClick={props.showOrHideSummary}> Cancel</button>
            <button className={classes.Button + ' ' + classes.Success} onClick={props.sendOrder}>  Continue</button>

        </div>
    )
}

export default orderSummary