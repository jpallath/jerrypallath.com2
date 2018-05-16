import React, { Component } from "react";
import ProjectMenu from "../components/projectmenu";
import ProjectItem from "../components/projectItem";
import fanload from "../images/fanload.png";
import socialCardMaker from "../images/socialcardmaker.png";
import weatherly from "../images/weatherly.png";
import pallathdotcom from "../images/pallathcom.png";
import reactiveInventory from "../images/reactiveinventory.png";
import weddingSite from "../images/WeddingSite.png";

import "../styles/projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 0,
          title: "Wedding Site",
          project: [
            "I volunteered to build a Wedding Site for my sister. I had to build out a few different components for this project.",
            "Used a variety of CSS styles; which included adding parallax effects, animations on load, and specific CSS transitions based on new style names given by my React/JS code",
            "In the Gallery container, I used Flickr's Photoset Get Photos API Call to continuously load new photos into my component.  I called the API whenever the user scrolled all the way to the bottom of the page to cause an infinite scroll effect which is only limited by the number of photos in the album",
            "The Festivities container used the Google Maps Javascript API.  There was the initial ComponentDidMount phase I built for, and updated the code with a ComponentDidUpdate method when I figured that the map wasn't updating when the rest of the component was updating.  This is the most functional container I built.  There is one state being shared by the central container to the children components.  When state is altered by one of the li objects, it changes the entire state and the current props of the sibling component.",
            "RSVP container used a Google Forms back-end so that my sister and her fiance can follow who's interacting with the site without building an entire back-end for them to log into."
          ],
          picture: weddingSite,
          github: "https://github.com/jpallath/sherrys_wedding",
          link: "http://www.thepainumkals.com/"
        },
        {
          id: 1,
          title: "FanLoad",
          project: [
            "The goal of this project was to cement my react skills.  This project utilized React, React-Router, and State Manipulation.  The user is greeted with a list of all available articles that they can read.  The app allows them to add new entries into the list and navigate to them",
            "Users are able to generate a new element to the state which would then be added to the grid.",
            "The most challenging part of developing this was getting a better grasp of React-Router.  I initally built anchor tags to link portions of the app, but I saw that it would re-render my state.  Once I figured how to get around how to avoid reloading my state by using <Link> tags, my app worked as expected.",
            "App is built with a responsive design.  Future development with this project would be to add Redux functionality and wiring it to a database and back-end."
          ],
          picture: fanload,
          github: "https://github.com/jpallath/airplane",
          link: "https://fast-beyond-80616.herokuapp.com/"
        },
        {
          id: 2,
          title: "SocialCardMaker",
          project: [
            "This was my first original project utilizing React and React-Router.  I looked at ideas on the internet on what to develop with React once you've learned the framework.  I saw this to be a great starting point in jumping in with zero experience",
            "This App required understanding inheritance.  Inheritance between parent to child, child to parent, and between siblings "
          ],
          picture: socialCardMaker,
          github: "https://github.com/jpallath/socialcardmaker"
        },
        {
          id: 3,
          title: "Weatherly",
          project: [
            "I wanted to show my mastery of React Router, and show that I can specify specific locations to update with a render.",
            "This app had various components rendered on different parts of the window. When specific components are activated they are rendered in the correct location of the App."
          ],
          picture: weatherly,
          github: "https://github.com/jpallath/weatherly"
        },
        {
          id: 4,
          title: "JerryPallath.com",
          project: [
            "I needed to make a new portfolio site that let me show off my React skills.",
            "This project pushed my understanding of React plus deployment and domain hosting (outside of just development)"
          ],
          picture: pallathdotcom,
          github: "https://github.com/jpallath/jerrypallath.com2",
          link: "http://www.jerrypallath.com/"
        },
        {
          id: 5,
          title: "Reactive Inventory",
          project: [
            "Quick project utilizing React while I was flying in a plane",
            "A spin of the To-Do List idea"
          ],
          picture: reactiveInventory,
          github: "https://github.com/jpallath/inventory"
        }
      ],
      currentProject: {
        id: 0,
        title: "Wedding Site",
        project: [
          "I volunteered to build a Wedding Site for my sister. I had to build out a few different components for this project.",
          "Used a variety of CSS styles; which included adding parallax effects, animations on load, and specific CSS transitions based on new style names given by my React/JS code",
          "In the Gallery container, I used Flickr's Photoset Get Photos API Call to continuously load new photos into my component.  I called the API whenever the user scrolled all the way to the bottom of the page to cause an infinite scroll effect which is only limited by the number of photos in the album",
          "The Festivities container used the Google Maps Javascript API.  There was the initial ComponentDidMount phase I built for, and updated the code with a ComponentDidUpdate method when I figured that the map wasn't updating when the rest of the component was updating.  This is the most functional container I built.  There is one state being shared by the central container to the children components.  When state is altered by one of the li objects, it changes the entire state and the current props of the sibling component.",
          "RSVP container used a Google Forms back-end so that my sister and her fiance can follow who's interacting with the site without building an entire back-end for them to log into."
        ],
        picture: weddingSite,
        github: "https://github.com/jpallath/sherrys_wedding",
        link: "http://www.thepainumkals.com/"
      }
    };
    this.menuChange = this.menuChange.bind(this);
  }

  menuChange = propId => {
    let filteredProject = this.state.projects.filter(
      project => project.id === propId
    );
    filteredProject = filteredProject[0];
    this.setState({ currentProject: filteredProject });
  };
  render() {
    return (
      <div className="projects">
        <ProjectMenu
          projects={this.state.projects}
          currentProject={this.state.currentProject}
          menuChange={this.menuChange.bind(this)}
        />
        <ProjectItem currentProject={this.state.currentProject} />
      </div>
    );
  }
}

export default Projects;
