import React, { Component } from "react";
import BlogForward from "../components/blogforward";
import BlogBackward from "../components/blogbackward";
import BlogMenuItem from "../components/blogmenuitem";

class BlogMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: "invisble"
    };
    this.triggerPost = this.triggerPost.bind(this);
    this.changePost = this.changePost.bind(this);
  }
  triggerPost = postId => {
    this.props.changePost(postId);
  };

  changePost = (postId, direction) => {
    this.props.changePost(postId, direction);
  };

  render() {
    let { posts, currentId } = this.props;
    let menu = posts.map(post => (
      <BlogMenuItem
        key={post.id}
        {...post}
        triggerPost={this.triggerPost.bind(this)}
      />
    ));
    return (
      <ul className="blog-menu">
        <h3>Posts</h3>
        <div className="blog-direction">
          <BlogBackward
            currentId={currentId}
            changePost={this.changePost.bind(this)}
          />
          <BlogForward
            currentId={currentId}
            changePost={this.changePost.bind(this)}
          />
        </div>
        {menu}
      </ul>
    );
  }
}

export default BlogMenu;
