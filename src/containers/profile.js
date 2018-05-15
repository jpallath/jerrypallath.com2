import React, { Component } from "react";
import JerryP1 from "../images/jerryp.jpg";

import "../styles/profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="image-container">
          <img src={JerryP1} alt="Jerry" className="profile-pic" />
          <div className="image-links">
            <a href="https://github.com/jpallath">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/jpallath">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.facebook.com/jpallath">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://twitter.com/Pallethechu">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.instagram.com/shotsbybear/">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <div className="person">
          <h1>Jerry Pallath</h1>
          <p>
            Greetings! My name is Jerry Pallath. I’m going to spend the next
            couple paragraphs to explain why exactly I’m not a waste of space,
            but instead a pretty AWESOME developer. (Not trying to toot my own
            horn).{" "}
          </p>

          <p>
            I’ve been in love with technology since I was a kid. I used to
            tinker with my computer, sometimes the hardware; but most of the
            time, I would be hacking the software I used. I felt creative trying
            to break and add functionality to the services I used. I felt my
            creativity brewing when I tinkered with my Xanga or MySpace pages
            (R.I.P by the way). I never expected the technologies behind these
            services to evolve, but they did and introduced me to the career
            that always seemed right to me.{" "}
          </p>

          <p>
            I started my real career in 2015 when I took part in a General
            Assembly Web Development Immersive Bootcamp. There I learned how to
            develop Full Stack Applications with Node.js and Rails with some
            front end development peppered in. I worked as a Front End Engineer
            at Mediaplanet and Digital Remedy, where I introduced new ideas and
            components that are still being used after I’ve left.{" "}
          </p>

          <p>
            I’m in search of opportunities that will let me push the current
            trends of web development further. I stay competitive with trends
            and frameworks and I want to work with people looking towards the
            bleeding edge of technology.
          </p>
          <p>
            Outside of development, I’m a fun person. People like me. I love
            watching YouTube videos and listen to podcasts to stay up to date on
            Pop Cult, Theories, and just random geekiness.
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
