import React, { cloneElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostService from '../../api/PostService';
import { Comments } from '../../components/comments';
import { DetailPost } from '../../components/post-detail';
import { Loader } from '../../components/ui/loader';
import { useFetching } from '../../hooks/useFetching';
import cl from './index.module.css';

export const Post = ({}) => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  })

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  })


  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, [])

  return (
    <div className={cl.container}>
      <h1 className={cl.title}>Post: </h1>
      {isLoading 
        ? 
          <Loader/>
        :
          <DetailPost post={post} />
      }
      <h1 className={cl.title}>Comments: </h1>
      {isCommentsLoading
        ? 
          <Loader/>
        :
          <Comments comments={comments} />
      }
    </div>
  )
}
