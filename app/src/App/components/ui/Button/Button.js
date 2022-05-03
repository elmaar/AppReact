import React,{useState, useEffect} from 'react'
import style from './Button.module.css'
import propTypes from 'prop-types'

const Button = (props) =>{
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
      console.log('isClicked a changer ->',isClicked)
      if(true===isClicked){
          setTimeout(()=>{setIsClicked(false)},1000)
      }
    }, [isClicked])
    return (
      <button
        className={style.Button}
        style={{...props.style, backgroundColor: props.bgColor, color: props.color }}
        type={props.type}
        onClick={(evt)=>{
          setIsClicked(true);
          props.onButtonClicked();
        }}
      >
        {props.children}
        <br/>
        {isClicked.toString()}
      </button>
    );
  };

Button.propTypes={
    children: propTypes.any.isRequired,
    bgColor: propTypes.string.isRequired,
    color: propTypes.string,
    style: propTypes.object,
    type: propTypes.string,
    onButtonClicked: propTypes.func.isRequired
}

Button.defaultProps={
    type:'button',
    onButtonClicked: ()=>{}
}
export default Button