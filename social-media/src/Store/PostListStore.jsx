import { createContext, useContext, useReducer } from "react";
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope toenjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard tobelieve.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
  {
    id: "3",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard tobelieve.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const postListReducer = (currPostList, action) => {
    switch (action.type) {
      case "ADD":
        return [action.payload, ...currPostList];

      case "DELETE":
        return currPostList.filter((post) => post.id !== action.payload.id);

      default:
        return currPostList;
    }
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (obj) => {
    dispatchPostList({
      type: "ADD",
      payload: obj,
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE",
      payload: { id },
    });
  };

  const contextValue = {
    postList,
    addPost,
    deletePost,
  };
  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};
export default PostListProvider;
