import React from 'react'
import classes from './index.module.css';

export const Button = ({children, ...props}) => {
  
  return (
    <button {...props} className={classes.myBtn}>{children}</button>
  )
}
