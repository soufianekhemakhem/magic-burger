import React from 'react'
import classes from './Modal.module.css'

const modal = (props) => {

    // let content = null

    // if (props.show) {
    //     content = (
    //         <div className={classes.Modal}>
    //             {props.children}
    //         </div>
    //     )
    // }

    // return (
    //     <div>
    //         {content}
    //     </div>
    // )

    return (
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
            }}>
            {props.children}
        </div>
    )
}

export default modal