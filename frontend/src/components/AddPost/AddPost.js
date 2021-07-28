import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../../store/posts/actions";
import Spinner from "../../components/spinner/Spinner";

const AddPost = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [filePrev, setFilePrev] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const { post, loading, error } = useSelector((state) => state.addPost);

  const addActiveClass = () => {
    setIsActive(true);
  };

  const removeActiveClass = () => {
    setIsActive(false);
    setFile(null);
    setFilePrev(null);
    setTitle("");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFilePrev(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    dispatch(addPost(formData));
    setFile(null);
    setTitle("");
    setFilePrev(null);
  };

  return (
    <div className="addpost">
      <button className="add-btn" onClick={addActiveClass}>
        <i className="fas fa-plus"></i>
      </button>
      <div className={`modal-wrapper ${isActive ? "active" : null}`}>
        <div className="modal">
          <div className="modal-header flex">
            <h3>
              <i className="fas fa-plus"></i> Add Post
            </h3>
            <button onClick={removeActiveClass}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            {post && !post.error && (
              <span className="alert alert-success">
                <i className="fas fa-check-circle"></i> Post succeed
              </span>
            )}
            {error && (
              <span className="alert alert-warning">
                <i className="fas fa-exclamation-circle"></i> Failed to post
              </span>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="title"
                  placeholder="Post title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="form-group file flex">
                <input onChange={handleFileChange} type="file" id="image" />
                {file && (
                  <div className="image-preview">
                    <img src={filePrev} alt="file" />
                  </div>
                )}
                <label htmlFor="image">
                  <i className="fas fa-camera"></i>
                </label>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? <Spinner txt="Posting" /> : "Post"}{" "}
                <i className="fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
