import React, {useState, useMemo} from "react";
import { PostList } from "./components/post-list";
import { PostForm } from "./components/post-form";
import { PostFilter } from "./components/post-filter";
import { Modal } from './components/ui/modal';
import './styles/App.css'
import { Button } from "./components/ui/button";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Asdsd2', description: 'zdffhjhj1'},
    {id: 2, title: 'JS', description: 'gvfdsafghjkhgftyrdsv2'}
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

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
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Post list"}/>
    </div>
  );
}

export default App;
