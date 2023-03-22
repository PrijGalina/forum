import React from 'react'
import cl from './index.module.css';

export const Comments = ({comments}) => {
  return (
    <ul className={cl.comments__list}>
      {comments.map((comment) => {
        return (
          <li key={`comment_${comment.id}`} className={cl.comments__item}>
            <h3 className={cl.comments__title}>{comment.name}</h3>
            <p className={cl.comments__email}>{comment.email}</p>
            <p className={cl.comments__body}>{comment.body}</p>
          </li>
        )
      })}
    </ul>
  )
}
