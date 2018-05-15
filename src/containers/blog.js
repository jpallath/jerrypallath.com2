import React, { Component } from "react";
import axios from "axios";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.getPosts = this.getPosts.bind(this);
  }

  getPosts() {
    axios
      .get(
        "https://www.googleapis.com/blogger/v3/blogs/6644583830471356118/posts?key=AIzaSyCUNY0CfcYkzq9dihhJ_qKOEfyMDUdUKzo"
      )
      .then(res => {
        console.log(res);
        this.setState({ posts: res.data.items });
      });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    function createMarkup(post) {
      console.log(post);
      return { __html: post };
    }
    let { posts } = this.state;
    let Blog = posts.map(post => (
      <div key={post.id} dangerouslySetInnerHTML={createMarkup(post.content)} />
    ));
    return <div>{Blog}</div>;
  }
}

export default Blog;
