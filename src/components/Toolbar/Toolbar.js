import React from 'react'
import NavigationItems from './NavigationItems/NavigationItems'
import logo from '../../assets/images/logo.png'
import classes from './Toolbar.module.css'


const toolbar = () => {

    return (
        <div className={classes.Toolbar}>
            <p>MENU</p>
            <div className={classes.Logo}>
                <img src={logo} alt='Magic Burger' />
            </div>
            <NavigationItems />
        </div>
    )
}

export default toolbar