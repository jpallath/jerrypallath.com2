import React, { Component } from "react";
import ProjectItem from "./projectItem";
import fanload from "../images/fanload.png";
import socialCardMaker from "../images/socialcardmaker.png";
import weatherly from "../images/weatherly.png";
import pallathdotcom from "../images/pallathcom.png";
import reactiveInventory from "../images/reactiveinventory.png";

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
          github: "https://github.com/jpallath/airplane",
          link: "https://fast-beyond-80616.herokuapp.com/"
        },
        {
          id: 1,
          title: "SocialCardMaker",
          project: [
            "I just learned React and I just wanted to build a simple project that passes state from parent to child, child to parent, and between siblings."
          ],
          picture: socialCardMaker,
          github: "https://github.com/jpallath/socialcardmaker"
        },
        {
          id: 2,
          title: "Weatherly",
          project: [
            "I wanted to show my mastery of React Router, and show that I can specify specific locations to update with a render."
          ],
          picture: weatherly,
          github: "https://github.com/jpallath/weatherly"
        },
        {
          id: 3,
          title: "JerryPallath.com",
          project: [
            "I needed to make a new portfolio site that let me show off my React skills."
          ],
          picture: pallathdotcom,
          github: "https://github.com/jpallath/jerrypallath.com2"
        },
        {
          id: 4,
          title: "Reactive Inventory",
          project: [
            "Quick project utilizing React while I was flying in a plane"
          ],
          picture: reactiveInventory,
          github: "https://github.com/jpallath/inventory"
        }
      ],
      currentId: 0
    };
    this.plusClick = this.plusClick.bind(this);
    this.minusClick = this.minusClick.bind(this);
  }

  plusClick = e => {
    let newId = this.state.currentId + 1;
    if (newId === 5) {
      newId = 0;
    }
    this.setState({
      currentId: newId
    });
  };

  minusClick = e => {
    let newId = this.state.currentId - 1;
    if (newId === -1) {
      newId = 4;
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
      <div className="project-box">
        <div onClick={this.minusClick} className="button left">
          <i className="fas fa-angle-double-left" />
        </div>
        {projects}
        <div onClick={this.plusClick} className="button right">
          <i className="fas fa-angle-double-right" />
        </div>
      </div>
    );
  }
}

export default Projects;
