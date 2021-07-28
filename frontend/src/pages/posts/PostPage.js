import React, { useEffect } from "react";
import Post from "../../components/Post/Post";
import Header from "../../components/Header/Header";
import AddPost from "../../components/AddPost/AddPost";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts/actions";

const PostPage = () => {
  const { posts, loading, error } = useSelector((state) => state.Posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="posts">
        <div className="container grid">
          {error ? (
            <h1>{error}</h1>
          ) : loading ? (
            <h1>Loading..</h1>
          ) : (
            <>
              {posts.length === 0 && <h2>No posts upoaded yet</h2>}
              {posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}
            </>
          )}
        </div>
      </div>
      <AddPost />
    </>
  );
};

export default PostPage;
