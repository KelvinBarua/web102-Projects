import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

import { supabase } from './supabaseClient';

function App() {
  const [posts, setPosts] = useState([]);
  const [dates, setDates] = useState([]);

  const [postUpvotes, setPostUpvotes] = useState({});
  const [postDownvotes, setPostDownvotes] = useState({});

  const [filteredPosts, setFilteredPosts] = useState([]);

  const [searchInput, setSearchInput] = useState("");

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
        
        const initialUpvotes = {};
        const initialDownvotes = {};
        data.forEach(post => {
          initialUpvotes[post.id] = post.upvotes || 0;
          initialDownvotes[post.id] = post.downvotes || 0;
        });
        setPostUpvotes(initialUpvotes);
        setPostDownvotes(initialDownvotes);
      }
    };

    fetchPosts();
  }, [posts]);

  const updateUpvotes = async (postID, newUpvotes) => {
    await supabase
      .from("Posts")
      .update({ upvotes: newUpvotes })
      .eq("id", postID);
  };

  const updateDownvotes = async (postID, newDownvotes) => {
    await supabase
      .from("Posts")
      .update({ downvotes: newDownvotes })
      .eq("id", postID);
  };

  const incrementUpvotes = (postID) => {
    const newUpvotes = postUpvotes[postID] + 1;
    setPostUpvotes(prevUpvotes => ({
      ...prevUpvotes,
      [postID]: newUpvotes
    }));
    updateUpvotes(postID, newUpvotes);
  };

  const incrementDownvotes = (postID) => {
    const newDownvotes = postDownvotes[postID] + 1;
    setPostDownvotes(prevDownvotes => ({
      ...prevDownvotes,
      [postID]: newDownvotes
    }));
    updateDownvotes(postID, newDownvotes);
  };

  useEffect(() => {
    let filtered = posts;
    if (searchInput) {
      filtered = filtered.filter((post) => post.title.toLowerCase().includes(searchInput.toLowerCase()));
    }
    setFilteredPosts(filtered);
  }, [posts, searchInput]);

  return (
    <div className='container'>
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className='button-area'>
        <Link to="/createPost"><button>Create Post ✍️</button></Link>
      </div>
      <div className='posts-area'>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div className="post" key={index}>
              <Link to={`/${post.id}`} state={{ Title: `${post.title}`, Body: `${post.post_body}`, id: `${post.id}` }}>
                <div className="post-content">
                  <h1 id="post-title">{post.title}</h1>
                  {post.edited ? (
                    <h2 id="post-body">{post.post_body} (edited)</h2>
                  ) : (
                    <h2 id="post-body">{post.post_body}</h2>
                  )}
                  <p>Post created at: {dates[index]}</p>
                </div>
              </Link>
              <div className="upvote_btns">
                <button id="upvote-btn" onClick={() => incrementUpvotes(post.id)}>Upvote 👍{postUpvotes[post.id]}</button>
                <button id="downvote-btn" onClick={() => incrementDownvotes(post.id)}>Downvote 👎 {postDownvotes[post.id]}</button>
              </div>
            </div>
          ))
        ) : (
          <h1>No posts here 😔</h1>
        )}
      </div>
    </div>
  );
}

export default App;
