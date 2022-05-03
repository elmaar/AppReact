import React from 'react'
import style from './Button.module.css'
import propTypes from 'prop-types'
const Button = (props)=>{
    console.log(props)
    return (<button
    className={style.Button} style={{...props.style, backgroundColor: PushSubscriptionOptions.bgColor, color : props.color}}>
        {props.children}
    </button>)
    
}

Button.propTypes={
    children: propTypes.any.isRequired,
    bgColor: propTypes.string.isRequired,
    color: propTypes.string,
    style: propTypes.object
}

export default Button