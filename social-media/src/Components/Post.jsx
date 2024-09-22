import React, { useState } from "react";
import Heart from "react-animated-heart";
import { MdOutlineDelete } from "react-icons/md";

function Post({ post, deletePost }) {
  const [isClick, setClick] = useState(false);
  return (
    <div
      className="card post-card position-relative"
      style={{ width: "18rem" }}
    >
      <span
        style={{ cursor: "pointer" }}
        onClick={() => deletePost(post.id)}
        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
      >
        <MdOutlineDelete />
      </span>

      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        <button type="button" class="btn  position-relative">
          <Heart
            className="like-icon"
            isClick={isClick}
            onClick={() => setClick(!isClick)}
          />

          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
          </span>
        </button>

        <br />
        {post.tags.map((item, i) => (
          <span key={i} class="badge text-bg-light tags">
            #{item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Post;
