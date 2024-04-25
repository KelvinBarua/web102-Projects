import Navbar from "../components/Navbar"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import EditForm from "../components/EditForm";

import { supabase } from "../supabaseClient";

function EditPost(){
  let { state } = useLocation();
  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState(state ? state.title : '');
  const [postBody, setPostBody] = useState(state ? state.body : "");

  const [postID, setPostID] = useState(state.id);

  const updatePost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Posts")
      .update({ title: postTitle, post_body: postBody, edited: true })
      .eq("id", postID);
    setPostTitle('');
    setPostBody("");

    alert("Post updated! Going back home...");
    navigate(`/`);
  };

  return (
    <div className="container">
      <Navbar />
      <h2>You are now editing your post titled: "{state.title}".</h2>
      <EditForm postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} updatePost={updatePost}/>
    </div>
  )
}

export default EditPost;