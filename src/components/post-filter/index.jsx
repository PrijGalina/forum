import React from 'react';
import { Input } from "../ui/input";
import { Select } from "../ui/select";
import classes from './post-filter.module.css';
import {useInput} from '../../hooks/useInput.js';

export const PostFilter = ({filter, setFilter}) => {
  const search_input = useInput(filter.query);

  return (
    <div className={classes.filter}>
      <Input 
        type="text"
        placeholder="search..."
        {...search_input}
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
