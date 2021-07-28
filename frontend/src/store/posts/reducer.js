import * as actions from "./constants";

const getPostReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case actions.POSTS_REQUEST:
      return { ...state, loading: true };
    case actions.POSTS_SUCCESS:
      return { loading: false, posts: action.payload };
    case actions.POSTS_FAIL:
      return { loading: false, error: action.payload };
    case actions.POSTS_RESET:
      return {};
    default:
      return state;
  }
};

const addPostReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case actions.ADD_POST_REQUEST:
      return { ...state, loading: true };
    case actions.ADD_POST_SUCCESS:
      return { loading: false, post: action.payload };
    case actions.ADD_POST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const deletePostReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_POST_REQUEST:
      return { loading: true };
    case actions.DELETE_POST_SUCCESS:
      return { loading: false, result: action.payload };
    case actions.DELETE_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { getPostReducer, addPostReducer, deletePostReducer };
