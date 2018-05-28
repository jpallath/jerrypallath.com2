import React, { Component } from "react";
import ProjectMenu from "../components/projectmenu";
import ProjectItem from "../components/projectItem";
import fanload from "../images/fanload.png";
import socialCardMaker from "../images/socialcard.png";
import weatherly from "../images/weatherly.png";
import pallathdotcom from "../images/jerrypallath.png";
import reactiveInventory from "../images/inventory.png";
import weddingSite from "../images/wedding.png";
import netflix from "../images/Netflix.png";

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
            "I was asked to build an entire website to organize my sister's wedding festivities.  I was required to build out the logic and flow of the site along with figuring out the design and implementation of the containers used.",
            "Built out specific containers that used components that corresponded with the container's use.",
            "In the Gallery container, I used Flickr's Photoset Get Photos API Call to continuously load new photos into my component.  I called the API whenever the user scrolled all the way to the bottom of the page to cause an infinite scroll effect which is only limited by the number of photos in the album.  Also, I implemented Lodash's Debounce function to make sure myy function gets called once every second, just to cut down on continuous calls with the API in one instance.",
            "The Festivities container used the Google Maps Javascript API.  There was the initial ComponentDidMount phase I built for, and updated the code with a ComponentDidUpdate method when I figured that the map wasn't updating when the rest of the component was updating.  This is the most functional container I built.  There is one state being shared by the central container to the children components.  When state is altered by one of the li objects, it changes the entire state and the current props of the sibling component.",
            "RSVP container used a Google Forms back-end so that my sister and her fiance can follow who's interacting with the site without building an entire back-end for them to log into.",
            "The entire site is built with SASS, so all colors and design elements are passed via a variable instead of hard coded in each and every instance."
          ],
          picture: weddingSite,
          github: "https://github.com/jpallath/sherrys_wedding",
          link: "http://www.thepainumkals.com/"
        },
        {
          id: 1,
          title: "Netflix Clone",
          project: [
            "The idea behind this project was to use an accessible API and see if I could make subsequent GET requests after an initial request for some particular data",
            "Used The Movie Database API",
            "The GET request occurring at the topmost container level of my app is to find lists my movie in question has been added to in The Movie Database",
            "The first GET request will pull a few lists with their corresponding ids, these lists in a smaller container would then pull out other movies in their list through another API request. A third API request is made to get more data on a single movie in the final container",
            "React-Router-DOM was utilized for a differentiation between root and just one list component.  When A list is rendered instead of the whole container, I render 20 films instead of the initial 5 films per list",
            "Materialize CSS is used to add a level of design to the overall project"
          ],
          picture: netflix,
          github: "https://github.com/jpallath/movies",
          link: "https://jerrys-netflix.herokuapp.com/"
        },
        {
          id: 2,
          title: "JerryPallath.com",
          project: [
            "I wanted to showcase my latest and greatest skills with React, specifically, in my portfolio site.  I push out new ideas, elements, and components and this site benefits with getting a majority of these implementations",
            "First major React Deployed App",
            "Built out containers for Projects and Blog.",
            "Projects container works with a Single Project component plus a Projects Menu Component",
            "Blog container works with a Single Blog component and a Blog List component. There is an API call made to Google's Blogger service that pulls all of my posts from the service and served directly on my front-end.  I implemented React conditional logic to highlight blog links when the corresponding blog post is active.",
            "The entire site utilizes SASS to implement mixins, variables, and imports.",
            "I've decided to keep the original look of my page as its image just to show how much it has matured in the past few months."
          ],
          picture: pallathdotcom,
          github: "https://github.com/jpallath/jerrypallath.com2",
          link: "http://www.jerrypallath.com/"
        },
        {
          id: 3,
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
          id: 4,
          title: "SocialCardMaker",
          project: [
            "This was my first original project utilizing React and React-Router.  I looked at ideas on the internet on what to develop with React once you've learned the framework.  I saw this to be a great starting point in jumping in with zero experience",
            "This App required understanding inheritance.  Inheritance between parent to child, child to parent, and between siblings "
          ],
          picture: socialCardMaker,
          github: "https://github.com/jpallath/socialcardmaker"
        },
        {
          id: 5,
          title: "Weatherly",
          project: [
            "I wanted to show my mastery of React Router, and show that I can specify specific locations to update with a render.",
            "This app had various components rendered on different parts of the window. When specific components are activated they are rendered in the correct location of the App."
          ],
          picture: weatherly,
          github: "https://github.com/jpallath/weatherly"
        },
        {
          id: 6,
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
      <div>
        <ProjectMenu
          projects={this.state.projects}
          currentProject={this.state.currentProject}
          menuChange={this.menuChange.bind(this)}
        />
        <div className="projects">
          <ProjectItem currentProject={this.state.currentProject} />
        </div>
      </div>
    );
  }
}

export default Projects;
