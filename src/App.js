import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Links from "./components/links";
import Contact from "./components/contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route exact path="/" render={props => <Profile />} />
          <Route exact path="/projects" render={props => <Projects />} />
          <Route exact path="/links" render={props => <Links />} />
          <Route exact path="/contact" render={props => <Contact />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
