import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'


const navigationItems = () => {

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem name='BurgerBuilder' path='/burgerbuilder' activeItem />
            <NavigationItem name='Checkout' path='/checkout' />
        </ul>
    )
}

export default navigationItems