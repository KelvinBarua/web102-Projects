import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar"
import Modal from "../components/Modal";

import { supabase } from "../supabaseClient";
import CommentForm from "../components/CommentForm";

function PostInfo() {
  let { state } = useLocation();
  const [postID, setPostID] = useState(state.id);

  const [postUpvotes, setPostUpvotes] = useState({});
  const [postDownvotes, setPostDownvotes] = useState({});

  const [post, setPost] = useState(null);

  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('Posts')
        .select();
      
      if (error) {
        console.log("Error fetching data:", error);
      } else {
        const filtered = data.filter((post) => post.id == postID);
        setPost(filtered.length > 0 ? filtered[0] : null);

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
  }, [postID]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('Comments')
        .select();
      
      if (error) {
        console.log("Error fetching data:", error);
      } else {
        const filtered = data.filter((comment) => comment.for_post == postID);
        setPostComments(filtered);
      }
    };

    fetchComments();
  }, [postComments]);


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

  const deletePost = async (toggleModal) => {
    await supabase
      .from('Posts')
      .delete()
      .eq('id', postID);
      deleteComments(); 
    
      toggleModal();
  };

  const deleteComments = async () => {
    await supabase
      .from('Comments')
      .delete()
      .eq('for_post', postID); 
  };

  return (
    <div className="container">
      <Navbar />
      <div className="posts-area">
      <div className="post-content">
        {post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.post_body}</p>
            <p>Post created: {state.date} {state.time}</p>
            <Link to={`/${postID}/editPost`} state={{ id: postID, title: post.title, body: post.post_body }}>
              <button>Edit Post ✍️</button>
            </Link>
          </>
        )}
      </div>

        <div className="upvote_btns">
          <button id="upvote-btn" onClick={() => incrementUpvotes(postID)}>Upvote 👍 {postUpvotes[postID]}</button>
          <button id="downvote-btn" onClick={() => incrementDownvotes(postID)}>Downvote 👎 {postDownvotes[postID]}</button>
          <Modal deletePost={deletePost}/>
        </div>
        <CommentForm postID={postID}/>
        <div className="comments">
          <h1>Comments:</h1>
          {postComments.length <= 0 ? (
            <h3>No comments yet 😔</h3>
          ) : (
            postComments.map((comment) => (
              <div className="comment" key={comment.id}>
                <h3>{comment.comment_body}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default PostInfo;