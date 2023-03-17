import React, {useState} from "react";
import { PostList } from "./components/post-list";
import { PostForm } from "./components/post-form";

import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', description: 'ghjhjhj1'},
    {id: 2, title: 'JS2', description: 'gvfdsafghjkhgftyrdsv2'}
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length !== 0 
        ? <PostList remove={removePost} posts={posts} title={"Post list"}/>
        : <h1 style={{textAlign: 'center'}}>Posts not found</h1>
      }
    </div>
  );
}

export default App;
