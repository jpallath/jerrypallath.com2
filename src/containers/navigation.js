import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <div>Profile</div>
        </Link>
        <Link to="/projects">
          <div>Projects</div>
        </Link>
        <Link to="/experience">
          <div>Experience</div>
        </Link>
        <Link to="/blog">
          <div>Blog</div>
        </Link>
      </nav>
    );
  }
}

export default Navigation;
