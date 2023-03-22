import React, {useState, useEffect, useRef} from "react";
import PostService from "../../api/PostService";
import {usePosts} from '../../hooks/usePosts';
import { useFetching } from "../../hooks/useFetching";
import { useObserver } from "../../hooks/useObserver";
import { getPageCount } from "../../utils/pages";
import { PostList } from "../../components/post-list";
import { PostForm } from "../../components/post-form";
import { PostFilter } from "../../components/post-filter";
import { Modal } from '../../components/ui/modal';
import { Button } from "../../components/ui/button";
import { Loader } from "../../components/ui/loader";
import { Pagination } from "../../components/ui/pagination";
import { Select } from "../../components/ui/select";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();


  const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
  }

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit])

  return (
    <div className="App">
      <Button style={{marginTop: '30px'}} onClick={()=> setModal(true)} >
        Create post
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <Select 
        value={limit} 
        onChange={(value) => setLimit(value)} 
        defaultValue="Num of posts per page"
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 15, name: '15'},
          {value: -1, name: 'all'},
        ]}
      />
      {postsError && 
        <h3 style={{margin: '25px 0'}}>An error has occurred: {postsError}</h3>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Post list"}/>
      <div ref={lastElement} style={{height: '20px', backgroundColor: 'transparent'}} />
      {isPostsLoading  && <Loader/>}
    
      <Pagination 
        totalPages={totalPages} 
        currentPage={page} 
        changePage={changePage} 
      />
    </div>
  );
}
