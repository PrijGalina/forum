import React from 'react'
import classes from './index.module.css';

export const Input = (props) => {
  return (
    <input className={classes.myInput} {...props} width={props.width}/>
  )
}
