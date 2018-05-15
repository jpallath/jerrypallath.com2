import React, { Component } from "react";

class BlogMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.triggerPost = this.triggerPost.bind(this);
  }
  triggerPost = postId => {
    this.props.changePost(postId);
  };
  render() {
    let { posts } = this.props;
    let menu = posts.map(post => (
      <li key={post.id} onClick={() => this.triggerPost(post.id)}>
        {post.title}
      </li>
    ));
    return (
      <ul className="blog-menu">
        <h3>Posts</h3>
        {menu}
      </ul>
    );
  }
}

export default BlogMenu;
