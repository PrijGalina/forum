import React from 'react'
import { Select } from "../ui/select";
import { Input } from "../ui/input";
import classes from './post-filter.module.css';

export const PostFilter = ({filter, setFilter}) => {
  
  return (
    <div className={classes.filter}>
      <Input 
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="search..."
        type="text"
      />
      <Select 
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="sort by"
        options={[
          {
            value: 'title',
            name: 'by title'
          },
          {
            value: 'body',
            name: 'by body'
          }
        ]}
      />
  </div>
  )
}
