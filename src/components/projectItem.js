import React, { Component } from "react";
import "../styles/projectItem.css";

class ProjectItem extends Component {
  render() {
    const { id, title, project, picture, currentId, github } = this.props;
    const projects = project.map((entry, index) => <p key={index}>{entry}</p>);
    return (
      <div className={currentId === id ? "project active" : "project inactive"}>
        <h3>{title}</h3>
        <img src={picture} alt="project" />
        <div className="description">
          <a href={github}>GitHub Link</a>
          {projects}
        </div>
      </div>
    );
  }
}

export default ProjectItem;
