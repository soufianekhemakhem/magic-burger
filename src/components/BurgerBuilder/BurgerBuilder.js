import React, { Component } from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import Modal from './Modal/Modal'
import OrderSummary from './OrderSummary/OrderSummary'
import axios from 'axios'
import loadingGif from '../../assets/images/loading.gif'


class burgerBuilder extends Component {

    constructor(props) {
        console.log('[BurgerBuilder.js] constructor')

        super(props)
        this.state = {
            ingredients: [
                // {
                //     id: 1,
                //     label: 'Salad',
                //     count: 0,
                //     price: 1.5,
                //     maxCount: 2
                // },
                // {
                //     id: 2,
                //     label: 'Cheese',
                //     count: 0,
                //     price: 1,
                //     maxCount: 3
                // },
                // {
                //     id: 3,
                //     label: 'Meat',
                //     count: 0,
                //     price: 2.5,
                //     maxCount: 2
                // },
                // {
                //     id: 4,
                //     label: 'Escalope',
                //     count: 0,
                //     price: 2,
                //     maxCount: 2
                // }
            ],
            totalPrice: 5,
            showModal: true,
            isLoading: true,
            errorMessage: ''

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
    //     showModal: false

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
            showModal: !this.state.showModal
        })

    }

    sendOrderHandler = () => {
        axios.post('http://react-training-server.herokuapp.com/burger', {
            burger: this.state.ingredients
        })
            .then((response) => {
                console.log(response);

                this.setState({
                    showModal: false
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount = () => {
        console.log('[BurgerBuilder.js] DidMount')

        //Axios est un traitement asynchrone de type Promise
        //(then) est une call-back f the promise

        // this.setState({
        //     showModal: true,
        //     isLoading: true
        // })
        // The 4 ligns upper to this are redundant need because no need to put setState inside DidMount
        // Only in asynchrone blocks like axios 

        axios.get('http://react-training-server.herokuapp.com/ingredients')
            .then((response) => {
                console.log(response);
                this.setState({
                    ingredients: response.data.ingredients,
                    showModal: false,
                    isLoading: false
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    errorMessage: 'something went wrong: ' + error.message
                })
            })
    }

    shouldComponentUpdate = (nextProp, nextState) => {
        console.log('[BurgerBuilder.js] shouldComponentUpdate')
        return true;
    }

    componentDidUpdate = () => {
        console.log('[BurgerBuilder.js] componentDidUpdate')
    }

    render() {
        console.log('[BurgerBuilder.js] render')

        let modalContent = null

        if (this.state.isLoading) {
            modalContent = (
                <div>
                    <div style={{ display: 'flex' }}>
                        <h3 style={{ width: '80%' }}> Fetching data from server .. </h3>
                        <img
                            style={{ width: '90px', height: '90px' }}
                            src={loadingGif} alt='loading..' />
                    </div>
                    <div> {this.state.errorMessage} </div>
                </div>
            )
        } else {
            modalContent = (
                <OrderSummary
                    totalPrice={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    showOrHideSummary={this.showOrHideSummaryHandler}
                    sendOrder={this.sendOrderHandler}
                />
            )
        }

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
                    show={this.state.showModal}
                    showOrHideSummary={this.showOrHideSummaryHandler}
                >
                    {/* <p> Hello world! </p> */}

                    {modalContent}

                </Modal>
            </div>
        )
    }
}


export default burgerBuilder