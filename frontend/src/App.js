import React from "react";
import "./app.css";
import PostPage from "./pages/posts/PostPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about/About";

const App = () => {
  return (
    <Router>
      <Route component={PostPage} path="/" exact />
      <Route component={About} path="/about" />
    </Router>
  );
};

export default App;
