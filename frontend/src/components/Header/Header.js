import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={isActive ? "active" : null}>
      <div className="container flex">
        <Link to="/" className="nav-brand">
          PWA
        </Link>
        <div className="menu-btn" onClick={toggleClass}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <ul className="nav flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link className="notify-btn" to="/">
              Notify Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
