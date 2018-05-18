import React, { Component } from "react";

class CurrentPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appearance: "in"
    };
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps) {
  //     let visibility = this.state.appearance === "in" ? "in" : "out";
  //     this.setState({ appearance: visibility });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.appearance !== "out") {
  //     this.setState({ appearance: "out" });
  //   }
  // }
  render() {
    let { currentPost } = this.props;
    let { appearance } = this.state;
    function createMarkup(content) {
      return { __html: content };
    }
    return (
      <div className={"current-post " + appearance}>
        <h2>{currentPost.title}</h2>
        <div dangerouslySetInnerHTML={createMarkup(currentPost.content)} />
      </div>
    );
  }
}

export default CurrentPost;
