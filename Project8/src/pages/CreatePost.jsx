import { useState } from "react";
import React from "react";

import Navbar from "../components/Navbar";

import { supabase } from "../supabaseClient";

function CreatePost(){

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
    </>
  )
}

export default CreatePost;