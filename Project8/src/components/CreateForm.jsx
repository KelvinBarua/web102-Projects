const CreateForm = ({postTitle, setPostTitle, postBody, setPostBody, createPost}) =>{
  return (
    <div className="createFormComponent">
      <form className="createForm">
        <label for="title-field">Post Title: </label>
        <input 
        id="title-field"
        type="text" 
        value={postTitle}
        onChange={(e) =>{
          setPostTitle(e.target.value);
        }}>
        </input>

        <label for="text-field">Post Body: </label>
        <textarea
          id="text-field"
          value={postBody}
          onChange={(e) => {
            setPostBody(e.target.value)
          }}
          rows={5} // Set an initial number of rows
        />

        <button id="create-post-button" type="submit" onClick={createPost}>Create Post ✍️</button>
      </form>
    </div>
  )
}

export default CreateForm;