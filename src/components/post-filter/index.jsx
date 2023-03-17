import React from 'react'
import { Select } from "../ui/select";
import { Input } from "../ui/input";

export const PostFilter = ({filter, setFilter}) => {
  
  return (
    <div>
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
            description: 'by title'
          },
          {
            value: 'description',
            description: 'by description'
          }
        ]}
      />
  </div>
  )
}
