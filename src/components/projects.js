import React, { Component } from "react";
import ProjectItem from "./projectItem";
import fanload from "../images/fanload.png";
import socialCardMaker from "../images/socialcardmaker.png";

import "../styles/projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 0,
          title: "FanLoad",
          project: [
            "The goal of this project was to cement my react skills.  This project utilized React, React-Router, and State Manipulation.  The user is greeted with a list of all available articles that they can read.  The app allows them to add new entries into the list and navigate to them",
            "App is built with a responsive design.  Future development with this project would be to add Redux functionality and wiring it to a database and back-end."
          ],
          picture: fanload,
          github: "https://github.com/jpallath/airplane"
        },
        {
          id: 1,
          title: "SocialCardMaker",
          project: [
            "I just learned React and I just wanted to build a simple project that passes state from parent to child, child to parent, and between siblings."
          ],
          picture: socialCardMaker,
          github: "https://github.com/jpallath/socialcardmaker"
        }
      ],
      currentId: 0
    };
    this.showClick = this.showClick.bind(this);
  }

  showClick = e => {
    let newId = this.state.currentId + 1;
    if (newId === 2) {
      newId = 0;
    }
    this.setState({
      currentId: newId
    });
  };
  render() {
    const projects = this.state.projects.map(project => (
      <ProjectItem
        currentId={this.state.currentId}
        key={project.id}
        {...project}
      />
    ));
    return (
      <div className="project-box" onClick={this.showClick}>
        {projects}
      </div>
    );
  }
}

export default Projects;
