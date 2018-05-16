import React, { Component } from "react";
import axios from "axios";

import BlogMenu from "../components/blogmenu.js";
import CurrentPost from "../components/currentpost.js";

import "../styles/blog.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPost: {}
    };
    this.getPosts = this.getPosts.bind(this);
    this.changePost = this.changePost.bind(this);
  }

  getPosts() {
    axios
      .get(
        "https://www.googleapis.com/blogger/v3/blogs/6644583830471356118/posts?key=AIzaSyCUNY0CfcYkzq9dihhJ_qKOEfyMDUdUKzo"
      )
      .then(res => {
        this.setState({
          posts: res.data.items,
          currentPost: res.data.items[0]
        });
      });
  }

  changePost = postId => {
    let specificPost = this.state.posts.filter(post => {
      return post.id === postId;
    });
    this.setState({ currentPost: specificPost[0] });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="blog">
        <BlogMenu
          posts={this.state.posts}
          changePost={this.changePost.bind(this)}
        />
        <CurrentPost currentPost={this.state.currentPost} />
      </div>
    );
  }
}

export default Blog;
