import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { useHover } from '../../hooks/useHover';
import { Button } from '../ui/button';
import cl from './index.module.css';

export const PostItem = ({post, remove, number}) => {
  const navigate  = useNavigate();
  const ref = useRef();
  const isHovering = useHover(ref);

  return (
    <div className={cl.post} ref={ref} style={{background: isHovering ? '#2b3b371a' : 'transparent'}}>
      <div>
        <strong>{post.id}. {post.title}</strong>
        <p>{post.body}</p>
      </div>
      <div className={cl.post__btns}>
        <Button onClick={() => navigate(`/posts/${post.id}`)}>open</Button>
        <span style={{display: 'block', width: '5px'}}/>
        <Button onClick={() => remove(post)}>delete</Button>
      </div>
    </div>
  )
}
