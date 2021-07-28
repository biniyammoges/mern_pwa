import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import {
  addPostReducer,
  deletePostReducer,
  getPostReducer,
} from "./posts/reducer";

const initialState = {};

const reducer = combineReducers({
  Posts: getPostReducer,
  addPost: addPostReducer,
  deletePost: deletePostReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
