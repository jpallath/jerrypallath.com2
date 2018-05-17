import React, { Component } from "react";

class BlogForward extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.menuChange = this.menuChange.bind(this);
  }
  menuChange = propId => {
    this.props.changePost(propId, "forward");
  };
  render() {
    let { currentId } = this.props;
    return (
      <div
        className="blog-arrow forward"
        onClick={() => this.menuChange(currentId)}
      >
        <i className="fas fa-caret-right" />
      </div>
    );
  }
}

export default BlogForward;
