import React, { Component } from "react";
import "../styles/projectmenu.css";

class ProjectMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  menuChange = propId => {
    this.props.menuChange(propId);
  };
  render() {
    const { projects } = this.props;
    let projectOptions = projects.map(project => (
      <div
        key={project.id}
        onClick={() => this.menuChange(project.id)}
        className={
          project.id === this.props.currentProject.id ? "active" : null
        }
      >
        <li>{project.title}</li>
      </div>
    ));
    return (
      <div className="project-menu">
        <h3>Projects</h3>
        {projectOptions}
      </div>
    );
  }
}

export default ProjectMenu;
