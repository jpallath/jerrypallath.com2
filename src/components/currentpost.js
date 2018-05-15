import React, { Component } from "react";

class CurrentPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { currentPost } = this.props;
    function createMarkup(content) {
      return { __html: content };
    }
    return (
      <div className="current-post">
        <h2>{currentPost.title}</h2>
        <div dangerouslySetInnerHTML={createMarkup(currentPost.content)} />
      </div>
    );
  }
}

export default CurrentPost;
