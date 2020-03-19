import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
// import Modal from './Modal/Modal'

class burgerBuilder extends Component {

    state = {
        ingredients: [
            {
                id: 1,
                label: 'Salad',
                count: 2
            },
            {
                id: 2,
                label: 'Cheese',
                count: 3
            },
            {
                id: 3,
                label: 'Meat',
                count: 2
            },
            {
                id: 4,
                label: 'Escalope',
                count: 0
            }
        ]

    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
                {/* <Modal /> */}
            </div>
        )
    }
}


export default burgerBuilder