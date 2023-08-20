import React from 'react'
import classes from './page-container.module.css';

export const PageContainer = ({children}) => {
  
  return (
    <main className={classes.myPage}>{children}</main>
  )
}
