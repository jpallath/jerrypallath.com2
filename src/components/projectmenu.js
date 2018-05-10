import React, { Component } from "react";
import "../styles/projectmenu.css";

class ProjectMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0
    };
  }
  menuChange = propId => {
    this.props.menuChange(propId);
  };
  render() {
    const { projects } = this.props;
    let projectOptions = projects.map(project => (
      <div key={project.id} onClick={() => this.menuChange(project.id)}>
        {project.title}
      </div>
    ));
    return <div className="project-menu">{projectOptions}</div>;
  }
}

export default ProjectMenu;