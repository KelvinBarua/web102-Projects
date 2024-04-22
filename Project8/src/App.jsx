import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

//components
import Navbar from './components/Navbar'

import { supabase } from './supabaseClient'

function App() {
  const [posts, setPosts] = useState([]);
  const [dates, setDates] = useState([]);

  const [searchInput, setSearchInput] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select();
      
      if (error) {
        console.log("Error fetching data:", error);
      } else {
        const formattedDates = data.map(post => {
          const date = new Date(post.created_at);
          const formattedDate = date.toLocaleDateString('en-US');
          const formattedTime = date.toLocaleTimeString('en-US');
          return `${formattedDate} ${formattedTime}`;
        });
        setDates(formattedDates);
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
            <Link to={`/${post.id}`} state={{ Title: `${post.title}`, Body: `${post.post_body}`, id: `${post.id}` }}>
              <div className="post" key={index}>
                <h1 id="post-title">{post.title}</h1>
                <h2 id="post-body">{post.post_body}</h2>
                <p>Post created at: {dates[index]}</p>
              </div>
            </Link>
          ))
        ) : (
          <h1>No posts here 😔</h1>
        )}
      </div>
    </div>
  )
}

export default App
