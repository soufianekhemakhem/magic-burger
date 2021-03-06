import React from 'react'
import classes from './NavigationItem.module.css'
import { Link } from 'react-router-dom'

// const setActive = (activeItem) => {
//     if (activeItem) {
//         return classes.active
//     } else {
//         return null
//     }
// }

// Lign 5 to 11 can be written in lign 19 inside className
// condition ? valeur1 : valeur2

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <Link to={props.path} className={props.activeItem ? classes.active : null}>
                {props.name}
            </Link>
        </li>
    )
}

export default navigationItem