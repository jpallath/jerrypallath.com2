import React, { Component } from "react";
import "../styles/experience.css";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        "Node.js",
        "Ruby on Rails",
        "PHP",
        "WordPress",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "HTML5/CSS3",
        "JavaScript",
        "Ruby",
        "jQuery",
        "React/Redux",
        "Angular.js",
        "Responsive Design",
        "SASS/SCSS",
        "Gulp/Grunt",
        "Jasmine (Unit Testing)",
        "JIRA",
        "Git / Github"
      ],
      experience: [
        {
          id: 0,
          company: "Digital Remedy",
          position: "Front End Developer",
          projects: [
            "Built out the “Dashboard” and “Link Library” pages for our Nibble Vault App project.  Our app allowed one of associated influencers to check on how much money they generated with our tagged articles.",
            "I generated the final front-end for all interactions a user makes on the page; utilizing mainly CSS3, and fine-tuning incorrect JavaScript blocks to improve the page’s response. I transformed our database calls to tangible information an influencer can understand.  This required PHP to calculate the differences made between each day, week, and month along with the percent change of each time period for the associated Influencer.  Built out three separate submodules that required different database (MySQL) pulls along with the calculations. Presented all of the data utilizing HTML and injecting PHP and building out the experience with CSS3 and JavaScript. ",
            "Day to day required maintenance of the company’s various WordPress sites.  This required understanding 3 different WordPress themes for 8 different blogs.  I fine-tuned and built out plugins that presented new data in our web pages such as the Brand Ambassador shortcode which would pull out a short styled blurb of a featured artist for our HipHopMyWay page.  "
          ]
        },
        {
          id: 1,
          company: "Mediaplanet",
          position: "Front End Developer",
          projects: [
            "Conceived and developed an Ad Shuttle page.  This page presented advertisers all of Mediaplanet’s technical specifications for print and digital ads, a terms and conditions link, and finally a link to our Ad Server which let Advertisers drop their finished ad directly into our office’s server.",
            "Built out a completely updated interface for all of our websites that made pages more accessible for readers on any kind of interface (desktop, mobile, and tablet)",
            "Provided maintenance on a number of our websites.  Was the Director of all technology happening our New York and Toronto offices."
          ]
        },
        {
          id: 2,
          company: "New York University",
          position: "Student IT Assistant",
          projects: [
            "Along with developing a deeper understanding of computers and how they work, I developed my people to people skills in explaining how and why problems came up on their computer."
          ]
        }
      ]
    };
  }
  render() {
    const jobs = this.state.experience.map(exp => (
      <div className="job-container" key={exp.id}>
        <h3>
          {exp.company} as a {exp.position}
        </h3>
        <ul className="job-projects">
          {exp.projects.map((project, index) => <li key={index}>{project}</li>)}
        </ul>
      </div>
    ));
    const skills = this.state.skills.map((skill, index) => (
      <li key={index}>{skill}</li>
    ));
    return (
      <div className="experience">
        <div className="jobs-box">
          <div className="job-container og">
            <h3>Previous Experience</h3>
          </div>
          {jobs}
        </div>
        <div className="skills">
          <div className="og">
            <h3>Skills</h3>
          </div>
          <ul>{skills}</ul>
        </div>
      </div>
    );
  }
}

export default Experience;
