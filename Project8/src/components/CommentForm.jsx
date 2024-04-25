import { useState } from "react";
import { supabase } from "../supabaseClient";

const CommentForm = ({postID}) => {
  const [form, setForm] = useState(false);
  const [commentBody, setCommentBody] = useState("");

  function toggleComments() {
    setForm(!form);
  }

  const createComment = async (event) => {
    event.preventDefault();  
    
    try {
      const { data, error } = await supabase
        .from('Comments')
        .insert([
          { comment_body: commentBody, for_post: postID }
        ]);
      
      if (error) throw error;
      alert(`Comment created! 👍`);

      // Reset the form fields after successful insertion
      setCommentBody("");
    } catch (err) {
      console.error('Error inserting data:', err);
      alert('Failed to create comment: ' + err.message);
    }
  };

  return (
    <div className="comments-section">
      {form ? (
        <button onClick={toggleComments}>Cancel ❌</button>
      ) : (
        <button onClick={toggleComments}>Add a Comment!</button>
      )}
      {form && (
        <form onSubmit={createComment}>
          <textarea
          id="comment-field"
          placeholder="Write your commment here"
          value={commentBody}
          onChange={(e) => {setCommentBody(e.target.value)}}
          rows={1} // Set an initial number of rows
          />
          <button type="submit">Post</button>
        </form>
      )}
    </div>
  )
}

export default CommentForm;