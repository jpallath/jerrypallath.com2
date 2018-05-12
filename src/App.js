import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Blog from "./components/blog";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route exact path="/" render={props => <Profile />} />
          <Route exact path="/projects" render={props => <Projects />} />
          <Route exact path="/experience" render={props => <Experience />} />
          <Route exact path="/blog" render={props => <Blog />} />
          <Contact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
