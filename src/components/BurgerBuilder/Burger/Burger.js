import React, { Component } from 'react'
import Ingredient from './Ingredient/Ingredient'
import classes from './Burger.module.css'


// const burger = (props) => {

class Burger extends Component {

    shouldComponentUpdate = (nextProp, nextState) => {
        console.log('[Burger.js] shouldComponentUpdate')
        return true;
    }

    componentDidUpdate = () => {
        console.log('[Burger.js] componentDidUpdate')
    }

    render() {

        let ingredientsList = []

        // for (let i = 0; i < ingredients.length; i++) {
        //     let item = ingredients[i]

        for (let item of this.props.ingredients) {

            for (let j = 0; j < item.count; j++) {
                ingredientsList.push(<Ingredient type={item.label} key={item.id + '_' + j} />)
            }
        }

        // let message = <p>Please start adding ingredients ! </p>
        // if (ingredientsList.length > 0) {
        //     message = null
        // }

        let message = ingredientsList.length > 0 ? null : <p>Please start adding ingredients ! </p>

        console.log('[Burger.js] rendering')

        return (
            <div className={classes.Burger}>
                <Ingredient type='BreadTop' />

                {message}

                {ingredientsList}

                <Ingredient type='BreadBottom' />
            </div>
        )
    }

}

export default Burger