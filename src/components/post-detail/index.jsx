import React from 'react'

export const DetailPost = ({post}) => {
  return (
    <div style={{marginBottom: '30px'}}>
      <h2>
        {post.id}.{post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  )
}
