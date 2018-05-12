import React, { Component } from "react";
import axios from "axios";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      api:
        "https://www.googleapis.com/blogger/v3/blogs/6644583830471356118/posts?key=AIzaSyCUNY0CfcYkzq9dihhJ_qKOEfyMDUdUKzo"
    };
    this.loadPosts = this.loadPosts.bind(this);
  }

  componentDidMount() {}

  loadPosts = () => {};

  render() {
    // let { posts } = this.state;
    // let blog = posts.map(post => <div key={post.id}>{post.content}</div>);
    return <div>hi</div>;
  }
}

export default Blog;
