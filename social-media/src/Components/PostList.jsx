import React, { useContext } from "react";
import Post from "./Post";
import "./PostList.module.css";
import { PostContext } from "../Store/PostListStore";
function PostList() {
  const { postList, deletePost } = useContext(PostContext);

  return (
    <div className="postContainer" style={{ display: "flex" }}>
      {postList.map((post) => (
        <Post key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
}

export default PostList;
