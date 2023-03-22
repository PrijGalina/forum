import React from 'react'
import { Button } from '../ui/button';

export const PostItem = ({post, remove, number}) => {
  
  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <p>{post.body}</p>
      </div>
      <div className="post__btns">
        <Button onClick={() => remove(post)}>delete</Button>
      </div>
    </div>
  )
}
