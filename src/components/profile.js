import React, { Component } from "react";
import JerryP1 from "../images/jerryp.jpg";

import "../styles/profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img src={JerryP1} alt="Jerry" className="profile-pic" />
        <div>
          <h1>Jerry Pallath</h1>
          <p>
            There’s a lot of words that can describe Jerry Pallath. A quitter
            isn’t one of them. Developer, technologist, innovator—those are
            words that he probably likes.{" "}
          </p>

          <p>
            Jerry’s been in love with development since 2015. He started with an
            intense Web Development Bootcamp with General Assembly to jumpstart
            his intellect and excitement (I’d recommend you ask him about his
            interest in technology before 2015; it’s fun—he won’t stop talking).
            Since then, he’s worked with a variety of different stacks,
            companies, and projects.{" "}
          </p>

          <p>
            Jerry considers himself a fun person. He has a lot of unique hobbies
            and interests. He wishes he could fish more in life, but then he
            remembers that he never fished in his life and that is just some
            strange happy place vision. What he actually loves and can spend
            hours talking about:{" "}
          </p>

          <ul>
            <li>Music: mostly Hip-Hop and Alternative Rock</li>
            <li>Anime and Manga: One Piece, Full Metal Alchemist</li>
            <li>Technology: Android, macOS, Web Apps</li>
            <li>Podcasts: Technology, Culture, Comedy, Long-Form</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
