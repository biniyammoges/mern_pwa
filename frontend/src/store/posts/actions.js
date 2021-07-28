import axios from "axios";
import * as actions from "./constants";

const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: actions.POSTS_REQUEST });

    const { data } = await axios.get("/post");
    dispatch({ type: actions.POSTS_SUCCESS, payload: data.posts });
  } catch (error) {
    dispatch({
      type: actions.POSTS_FAIL,
      payload: "failed to fetch",
    });
  }
};

const addPost = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actions.ADD_POST_REQUEST });

    const { data } = await axios.post("/post", formData, {
      "content-type": "application/json",
    });

    dispatch({ type: actions.ADD_POST_SUCCESS, payload: data.post });
  } catch (err) {
    dispatch({
      type: actions.ADD_POST_FAIL,
      payload: "failed to fetch",
    });
  }
};

const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.DELETE_POST_REQUEST });

    const { data } = await axios.delete(`/post/${id}`);

    dispatch({
      type: actions.DELETE_POST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actions.DELETE_POST_FAIL,
      payload: "failed to delete",
    });
  }
};

export { getPosts, addPost, deletePost };
