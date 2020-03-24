import React from 'react'
import classes from './Modal.module.css'
import Backdrop from './Backdrop/Backdrop'

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
        <div>
            {props.show ? <Backdrop showOrHideSummary={props.showOrHideSummary} /> : null}
            < div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
                }}>
                {props.children}
            </div>

        </div >
    )
}

export default modal