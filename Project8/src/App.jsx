import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

import { supabase } from './supabaseClient';

function App() {
  const [posts, setPosts] = useState([]);

  const [postUpvotes, setPostUpvotes] = useState({});
  const [postDownvotes, setPostDownvotes] = useState({});

  const [filteredPosts, setFilteredPosts] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select();
      
      if (error) {
        console.log("Error fetching data:", error);
      } else {
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

  useEffect(() => {
    let filtered = posts;
    if (searchInput) {
      filtered = filtered.filter((post) => post.title.toLowerCase().includes(searchInput.toLowerCase()));
    }
    filtered = filtered.sort((a, b) => {
      if (sortBy === 'date') {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      } else if (sortBy === 'title') {
        return sortOrder === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortBy === 'upvotes') {
        const upvotesA = postUpvotes[a.id];
        const upvotesB = postUpvotes[b.id];
        return sortOrder === 'asc' ? upvotesA - upvotesB : upvotesB - upvotesA;
      }
    }
    )
    setFilteredPosts(filtered);
  }, [posts, searchInput]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className='container'>
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className='button-area'>
        <button id={`date-sort-btn-${sortBy === 'date' ? 'active' : 'off'}`} onClick={() => setSortBy('date')}>Sort by Date 📆</button>
        <button id={`title-sort-btn-${sortBy === 'title' ? 'active' : 'off'}`} onClick={() => setSortBy('title')}>Sort by Title</button>
        <button id={`title-sort-btn-${sortBy === 'upvotes' ? 'active' : 'off'}`} onClick={() => setSortBy('upvotes')}>Sort by Upvotes</button>
        {sortOrder === 'asc' ? (
          <button onClick={toggleSortOrder}>Ascending Order ⬆</button>
        ) : (
          <button onClick={toggleSortOrder}>Descending Order ⬇</button>
        )}
        <Link to="/createPost"><button id="create-post-btn">Create Post ✍️</button></Link>
      </div>
      <div className='posts-area'>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div className="post" key={index}>
              <Link to={`/${post.id}`} state={{ Title: `${post.title}`, Body: `${post.post_body}`, id: `${post.id}`, date: `${new Date(post.created_at).toLocaleDateString('en-US')}`, time: `${new Date(post.created_at).toLocaleTimeString('en-US')}` }}>
                <div className="post-content">
                  <h1 id="post-title">{post.title}</h1>
                  {post.edited ? (
                    <h2 id="post-body">{post.post_body} (edited)</h2>
                  ) : (
                    <h2 id="post-body">{post.post_body}</h2>
                  )}
                  <p>Post created at: {new Date(post.created_at).toLocaleDateString('en-US')} {new Date(post.created_at).toLocaleTimeString('en-US')}</p>
                </div>
              </Link>
              <div className="upvote_btns">
                <button id="upvote-btn">Upvote 👍{postUpvotes[post.id]}</button>
                <button id="downvote-btn">Downvote 👎 {postDownvotes[post.id]}</button>
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
