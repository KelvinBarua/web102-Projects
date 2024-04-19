import { useState } from "react";
import React from "react";

import Navbar from "../components/Navbar";

import { supabase } from "../supabaseClient";
import CreateForm from "../components/CreateForm";

function CreatePost(){

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState("");

  const createCrewmate = async (event) => {
    event.preventDefault();  
    
    try {
      const { data, error } = await supabase
        .from('Posts')
        .insert([
          { title: postTitle, post_body: postBody }
        ]);
      
      if (error) throw error;
      alert("TTENTION! Your unique id for this post is: . Use this to edit your post. ");

      // Reset the form fields after successful insertion
      setPostTitle('');
      setPostBody("");
    } catch (err) {
      console.error('Error inserting data:', err);
      alert('Failed to create crewmate: ' + err.message);
    }
  };

  return (
    <>
      <div className="CreatePostContainer">
        <Navbar />
        <CreateForm />
      </div>
    </>
  )
}

export default CreatePost;