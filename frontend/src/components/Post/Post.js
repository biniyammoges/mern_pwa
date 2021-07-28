import React from "react";
import { deletePost, getPosts } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const { ok, loading } = useSelector((state) => state.deletePost);

  const delPost = () => {
    dispatch(delete post._id);
    dispatch(getPosts());
  };

  return (
    <div className="card">
      <button className="del-btn" onClick={delPost}>
        {loading ? <>...</> : <i class="fas fa-trash"></i>}
      </button>
      <div className="card-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="card-body">
        <span className="card-title">{post.title}</span>
      </div>
    </div>
  );
};

export default Post;
