import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

//components
import Navbar from './components/Navbar'

import { supabase } from './supabaseClient'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select();
      
      if (error) {
        console.log("Error fetching data:", error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, [posts]);

  return (
    <div className='container'>
      <Navbar />
      <div className='button-area'>
        <Link to="/createPost"><button>Create Post ✍️</button></Link>
      </div>
      <div className='posts-area'>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div className="post" key={index}>
              <h2>{post.title}</h2>
              <p>{post.post_body}</p>
            </div>
          ))
        ) : (
          <h1>No posts here 😔</h1>
        )}
      </div>
    </div>
  )
}

export default App
