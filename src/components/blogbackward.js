import React, { Component } from "react";

class BlogBackward extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.menuChange = this.menuChange.bind(this);
  }
  menuChange = propId => {
    this.props.changePost(propId, "backward");
  };
  render() {
    let { currentId } = this.props;
    return (
      <div
        className="blog-arrow backward"
        onClick={() => this.menuChange(currentId)}
      >
        <i className="fas fa-caret-left" />
      </div>
    );
  }
}

export default BlogBackward;
