import { useEffect, useState } from "react";
import React from "react";

import Navbar from "../components/Navbar";

import { supabase } from "../supabaseClient";
import CreateForm from "../components/CreateForm";

function CreatePost(){

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState("");

  const createPost = async (event) => {
    event.preventDefault();  
    
    try {
      const { data, error } = await supabase
        .from('Posts')
        .insert([
          { title: postTitle, post_body: postBody, upvotes: 0, downvotes: 0 }
        ]);
      
      if (error) throw error;
      alert(`Post created! 👍`);

      // Reset the form fields after successful insertion
      setPostTitle('');
      setPostBody("");
    } catch (err) {
      console.error('Error inserting data:', err);
      alert('Failed to create post: ' + err.message);
    }
  };

  return (
    <>
      <div className="CreatePostContainer">
        <Navbar />
        <CreateForm postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} createPost={createPost}/>
      </div>
    </>
  )
}

export default CreatePost;