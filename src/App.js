import React, {useState, useEffect} from "react";
import { PostList } from "./components/post-list";
import { PostForm } from "./components/post-form";
import { PostFilter } from "./components/post-filter";
import { Modal } from './components/ui/modal';
import './styles/App.css'
import { Button } from "./components/ui/button";
import {usePosts} from './hooks/usePosts';
import PostService from "./api/PostService";
import { Loader } from "./components/ui/loader";


function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {

      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 2000)
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  useEffect(() => {
    fetchPosts();
  }, [])

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
      {
        isPostsLoading 
        ? <Loader/>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Post list"}/>
      }
    </div>
  );
}

export default App;
