import React, { useContext, useRef } from "react";
import { PostContext } from "../Store/PostListStore";

function CreatPost() {
  const userid = useRef();
  const title = useRef();
  const content = useRef();
  const reactions = useRef();
  const tags = useRef();

  const { addPost } = useContext(PostContext);

  const handleForm = (event) => {
    event.preventDefault();
    addPost({
      id: Date.now(),
      title: title.current.value,
      body: content.current.value,
      reactions: reactions.current.value,
      userId: userid.current.value,
      tags: tags.current.value.split(","),
    });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            User Id
          </label>
          <input type="text" className="form-control" id="" ref={userid} />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Add Caption
          </label>
          <input type="text" className="form-control" id="" ref={title} />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="" ref={content} />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Add tags
          </label>
          <input type="text" className="form-control" id="" ref={reactions} />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            reactions
          </label>
          <input type="text" className="form-control" id="" ref={tags} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatPost;
