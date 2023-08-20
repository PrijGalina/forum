import React from 'react'
import classes from './main.module.css';

export const Main = ({children}) => {
  
  return (
    <div className={classes.myMain}>{children}</div>
  )
}
