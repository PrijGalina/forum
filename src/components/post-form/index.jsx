import React, {useState} from 'react'
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});  
  
  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {...post, id: Date.now()};
    create(newPost);
    setPost({title: '', body: ''});
  };

  return (
    <form>
    <Input 
      value={post.title}
      onChange={ e => setPost({...post, title: e.target.value})}
      type="text" 
      placeholder="post's title"
    />
    <Input 
      value={post.body}
      onChange={ e => setPost({...post, body: e.target.value})}
      type="text" 
      placeholder="post's desc"
    />
    <Button onClick={addNewPost}>create post</Button>
  </form>
  )
}
