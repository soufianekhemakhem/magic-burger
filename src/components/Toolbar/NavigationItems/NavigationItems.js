import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'


const navigationItems = () => {

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem name='BurgerBuilder' activeItem />
            <NavigationItem name='Checkout' />
        </ul>
    )
}

export default navigationItems