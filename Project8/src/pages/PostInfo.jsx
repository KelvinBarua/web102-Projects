import { useState } from "react"
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar"

function PostInfo(){
  let { state } = useLocation();
  const [postID, setPostID] = useState(state.id);
  return (
    <div className="container">
      <Navbar />
      <div className="posts-area">
        <div className="post-content">
          <h1>{state.Title}</h1>
          <p>{state.Body}</p>
          <Link to={`/${postID}/editPost`} state={{ id: `${postID}`, title: `${state.Title}`, body: `${state.Body}` }}><button>Edit Post ✍️</button></Link>
        </div>
      </div>
    </div>
  )
}

export default PostInfo;