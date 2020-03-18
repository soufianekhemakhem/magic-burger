import React from 'react'
import Burger from './Burger/Burger'
import BuildControls from './BuildControls/BuildControls'
import Modal from './Modal/Modal'



const burgerBuilder = () => {

    return (
        <div>
            <Burger />
            <BuildControls />
            <Modal />
        </div>
    )
}

export default burgerBuilder