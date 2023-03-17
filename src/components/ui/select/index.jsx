import React from 'react'
import classes from './index.module.css';

export const Select = ({options, defaultValue, value, onChange}) => {
  
  return (
    <select
      value={value}
      onChange={ event => onChange(event.target.value)}
    >
      <option value="" disabled>{defaultValue}</option>
      {
        options.map(option => <option value={option.value} key={option.value}>{option.description}</option>)
      }
    </select>
  )
}
