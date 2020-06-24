import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import Modal from './Modal/Modal'
import OrderSummary from './OrderSummary/OrderSummary'


class burgerBuilder extends Component {

    constructor(props) {
        console.log('[BurgerBuilder.js] constructor')

        super(props)
        this.state = {
            ingredients: [
                {
                    id: 1,
                    label: 'Salad',
                    count: 0,
                    price: 1.5,
                    maxCount: 2
                },
                {
                    id: 2,
                    label: 'Cheese',
                    count: 0,
                    price: 1,
                    maxCount: 3
                },
                {
                    id: 3,
                    label: 'Meat',
                    count: 0,
                    price: 2.5,
                    maxCount: 2
                },
                {
                    id: 4,
                    label: 'Escalope',
                    count: 0,
                    price: 2,
                    maxCount: 2
                }
            ],
            totalPrice: 5,
            ordered: false

        }
    }

    // state = {
    //     ingredients: [
    //         {
    //             id: 1,
    //             label: 'Salad',
    //             count: 0,
    //             price: 1.5,
    //             maxCount: 2
    //         },
    //         {
    //             id: 2,
    //             label: 'Cheese',
    //             count: 0,
    //             price: 1,
    //             maxCount: 3
    //         },
    //         {
    //             id: 3,
    //             label: 'Meat',
    //             count: 0,
    //             price: 2.5,
    //             maxCount: 2
    //         },
    //         {
    //             id: 4,
    //             label: 'Escalope',
    //             count: 0,
    //             price: 2,
    //             maxCount: 2
    //         }
    //     ],
    //     totalPrice: 5,
    //     ordered: false

    // }

    addOrRemoveIngredientHandler = (id, action) => { //we use id instead of using label
        let newIngredients = [...this.state.ingredients]
        let price = this.state.totalPrice

        const index = newIngredients.findIndex((item) => {
            return item.id === id //we use id instead of using label
        })

        if (action === 'add') {
            newIngredients[index].count++
            price += newIngredients[index].price
        } else {
            newIngredients[index].count--
            price -= newIngredients[index].price
        }

        this.setState({
            ingredients: newIngredients,
            totalPrice: price
        })
    }

    // removeIngredientHandler = (id) => { //we use id instead of using label
    //     let newIngredients = [...this.state.ingredients]
    //     let price = this.state.totalPrice

    //     const index = newIngredients.findIndex((item) => {
    //         return item.id === id //we use id instead of using label
    //     })

    //     newIngredients[index].count--
    //     price = price - newIngredients[index].price

    //     this.setState({
    //         ingredients: newIngredients,
    //         totalPrice: price
    //     })
    // }

    showOrHideSummaryHandler = () => {
        this.setState({
            ordered: !this.state.ordered
        })

    }

    componentDidMount = () => {
        console.log('[BurgerBuilder.js] DidMount')
    }

    render() {
        console.log('[BurgerBuilder.js] render')

        return (
            <div>
                <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    totalPrice={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    addOrRemoveIngredient={this.addOrRemoveIngredientHandler}
                    showOrHideSummary={this.showOrHideSummaryHandler}
                // removeIngredient={this.removeIngredientHandler}
                />
                <Modal
                    show={this.state.ordered}
                    showOrHideSummary={this.showOrHideSummaryHandler}
                >
                    {/* <p> Hello world! </p> */}
                    <OrderSummary
                        totalPrice={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        showOrHideSummary={this.showOrHideSummaryHandler}
                    />
                </Modal>
            </div>
        )
    }
}


export default burgerBuilder