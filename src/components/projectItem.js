import React, { Component } from "react";
import "../styles/projectItem.css";

class ProjectItem extends Component {
  render() {
    const { id, title, project, picture, currentId, github, link } = this.props;
    const projects = project.map((entry, index) => <p key={index}>{entry}</p>);
    return (
      <div className={currentId === id ? "project active" : "project inactive"}>
        <h3>{title}</h3>
        <img src={picture} alt="project" />
        <div className="description">
          <div className="projectlinks">
            <a href={github}>GitHub</a>
            {link ? <a href={link}>Project</a> : null}
          </div>
          {projects}
        </div>
      </div>
    );
  }
}

export default ProjectItem;
