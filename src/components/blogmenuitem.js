import React, { Component } from "react";

class BlogMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: "inactive"
    };
    this.triggerPost = this.triggerPost.bind(this);
    this.hoverPost = this.hoverPost.bind(this);
  }

  triggerPost = postId => this.props.triggerPost(postId);

  hoverPost = () => {
    let hoverStatus = "active";
    this.setState({ hover: hoverStatus });
  };

  hoverLeavePost = () => {
    let hoverStatus = "inactive";
    this.setState({ hover: hoverStatus });
  };

  render() {
    let { id, title, author, currentId, published } = this.props;
    published = published.split("T");
    published = published[0];
    console.log(currentId);
    console.log(id);
    return (
      <li
        key={id}
        onClick={() => this.triggerPost(id)}
        onMouseOver={() => this.hoverPost()}
        onMouseLeave={() => this.hoverLeavePost()}
        className={currentId === id ? "active" : null}
      >
        {title}
        <a className={"tooltip " + this.state.hover}>
          by {author.displayName} <br />
          {published}
        </a>
      </li>
    );
  }
}

export default BlogMenuItem;
