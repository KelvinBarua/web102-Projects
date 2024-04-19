const CreateForm = ({postTitle, setPostTitle, postBody, setPostBody}) =>{
  return (
    <div className="createFormComponent">
      <form className="createForm">
        <lablel for="title-field">Post Title: </lablel>
        <input 
        id="title-field"
        type="text" 
        value={postTitle}
        onChange={(e) =>{
          setPostTitle(e.target.value);
        }}>
        </input>

        <lablel for="text-field">Post Body: </lablel>
        <textarea
          id="text-field"
          value={postBody}
          onChange={(e) => {
            setPostBody(e.target.value)
          }}
          rows={5} // Set an initial number of rows
        />

        <button id="create-post-button" type="submit">Create Post ✍️</button>
      </form>
    </div>
  )
}

export default CreateForm;