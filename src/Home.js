import React, { createRef } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ParticlesComponent from "./sections/Particles";
// import SkillSection from "./sections/Skill";
// import ExperienceSection from "./sections/Experience";
import Grid from "@material-ui/core/Grid";
// import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      last_y: window.scrollY,
      isTop: true
    };
    this.canvasRef = createRef();
    this.profileRef = createRef();
    this.experienceRef = createRef();
    this.skillRef = createRef();
  }

  scrollHere(ref) {
    if (!ref) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, ref.current.offsetTop);
    }
  }

  render() {
    return (
      <>
        <ParticlesComponent ref={this.canvasRef} />
        <div className="main-text-container">
          <h1>Jay Lim</h1>
          <div>
            <h3 className="">
              <i className="fas fa-briefcase"></i> Web/iOS Software Engineer
            </h3>
            <h3>
              <a
                href="https://www.github.com/jlxc106"
                rel="noopener noreferrer"
                target="_blank"
                className="link-github"
              >
                <i className="fab fa-github-alt"></i> Github
              </a>
            </h3>
            <h3>
              <a
                href="https://www.linkedin.com/in/jayl1m/"
                rel="noopener noreferrer"
                target="_blank"
                className="link-linkedin"
              >
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </h3>
            <h3>
              <i className="far fa-envelope"></i>{" "}
              [first-name][last_name]106@gmail.com
              {/* <i className="fas fa-at"></i> [first-name][last_name]106@gmail.com */}
            </h3>
          </div>
        </div>
        <i
          className="fas fa-chevron-down chevron-down-icon color-white"
          onClick={() => {
            this.scrollHere(this.profileRef);
          }}
        ></i>
        <Grid
          container
          justify="center"
          alignItems="center"
          ref={this.profileRef}
          className={`${this.state.isTop ? "" : ""} profileSection`}
        >
          <Grid className="img-container" item xs={12} sm={3}>
            <img
              className="v-center profile-img"
              src="jay.jpeg"
              alt="jay"
            ></img>
          </Grid>

          <Grid item xs={12} sm={9}>
            <p className="section-font" style={{ marginLeft: "10px" }}>
              Hello, my name is <b>Jay Lim</b>; I'm a{" "}
              <b>web/iOS software engineer</b>, with a passion for learning and
              solving problems.
            </p>
          </Grid>
          <i
            className="fas fa-chevron-down chevron-down-icon"
            onClick={() => {
              this.scrollHere(this.experienceRef);
            }}
          ></i>
        </Grid>

        <Grid
          container
          ref={this.experienceRef}
          justify="center"
          className={`${this.state.isTop ? "" : ""} experienceSection`}
        >
          <Grid className="section-title" item xs={12} sm={3}>
            <h3 className="section-font">Experience</h3>
          </Grid>
          <Grid className="section-desc" item xs={12} sm={9}>
            <div className="">
              <h4 className="section-font-sec exp-title">HaloSentient</h4>
              <h5 className="exp-sub-title">FullStack Developer</h5>
              <p className="exp-desc">
              Implemented mobile friendly ecommerce marketplace website using React/Redux with hooks, Node.js, Typescript, Firebase, and Stripe as the payment processor. Designed and developed security-based web application using React/Redux, MongoDB, Node.js and Socket.io for real-time UI updates. Audited (QA) for interview-based web (Angular/Node.js) & mobile (Swift & JAVA) application by testing client & reading source code. Identified and reported multiple exploit avenues in web application. Leveraged knowledge in Git, GCP, Fullstack web development, Javascript using ES6+
              </p>
              <ul className="exp-skills">
                <li>
                  <span>Web</span>
                </li>
                <li>
                  <span>Javascript</span>
                </li>
                <li>
                  <span>Wordpress</span>
                </li>
                <li>
                  <span>React</span>
                </li>
                <li>
                  <span>Redux</span>
                </li>
                <li>
                  <span>Node.js</span>
                </li>
                <li>
                  <span>SQL</span>
                </li>
                <li>
                  <span>NoSQL</span>
                </li>
                <li>
                  <span>Express</span>
                </li>
                <li>
                  <span>MongoDB</span>
                </li>
                <li>
                  <span>GCP</span>
                </li>
                <li>
                  <span>Heroku</span>
                </li>
                <li>
                  <span>Socket.io</span>
                </li>
                <li>
                  <span>HTML</span>
                </li>
                <li>
                  <span>CSS</span>
                </li>
                <li>
                  <span>Git</span>
                </li>
                <li>
                  <span>Apache</span>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="section-font-sec exp-title">SpotLite</h4>
              <h5 className="exp-sub-title">Software Engineer</h5>
              <p className="exp-desc">
                Developed backend API using Golang on the GCP platform(Firebase,
                Storage, Spanner, Functions) to provide backend services for an
                iOS application. Developed an iOS app using Swift(SwiftUI
                framework with UIKit components) – building UIs, authentication
                system w/ biometric auth, video cropping & thumbnail generation,
                state management, CRUD operations with backend & Core Data,
                sample data population scripts, background app refresh, etc.
                Responsible for synchronizing data on backend with data on the
                client. Continuously improved the quality of the codebase with
                quicker and more efficient solutions. Built the main and profile
                preview website from scratch using React and an API route to
                populate data.
              </p>
              <ul className="exp-skills">
                <li>
                  <span>iOS</span>
                </li>
                <li>
                  <span>Web</span>
                </li>
                <li>
                  <span>Golang</span>
                </li>
                <li>
                  <span>Swift</span>
                </li>
                <li>
                  <span>SwiftUI</span>
                </li>
                <li>
                  <span>UIKit</span>
                </li>
                <li>
                  <span>GCP</span>
                </li>
                <li>
                  <span>Firebase</span>
                </li>
                <li>
                  <span>SQL</span>
                </li>
                <li>
                  <span>Alamofire</span>
                </li>
                <li>
                  <span>API</span>
                </li>
                <li>
                  <span>Core Data</span>
                </li>
                <li>
                  <span>Biometric Auth</span>
                </li>
                <li>
                  <span>React</span>
                </li>
                <li>
                  <span>Javascript</span>
                </li>
                <li>
                  <span>HTML</span>
                </li>
                <li>
                  <span>CSS</span>
                </li>
                <li>
                  <span>Git</span>
                </li>
                <li>
                  <span>Apache</span>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="section-font-sec exp-title">MaintStar</h4>
              <h5 className="exp-sub-title">React Intern</h5>
              <p className="exp-desc">
                Responsible for creating Query module using React front end.
                Utilized Semantic UI and Kendo UI for React to style HTML.
                Utilized Mobx framework with React to manage state. Pulled data
                from API route connected to MYSQL Server database. Component
                lets end users run reports using custom parameters and view pdf
                on the browser.
              </p>
              <ul className="exp-skills">
                <li>
                  <span>Web</span>
                </li>
                <li>
                  <span>React</span>
                </li>
                <li>
                  <span>Mobx</span>
                </li>
                <li>
                  <span>Semantic UI</span>
                </li>
                <li>
                  <span>Kendo UI</span>
                </li>
                <li>
                  <span>Javascript</span>
                </li>
                <li>
                  <span>HTML</span>
                </li>
                <li>
                  <span>CSS</span>
                </li>
              </ul>
            </div>
            <div></div>
          </Grid>
          <i
            className="fas fa-chevron-down chevron-down-icon"
            onClick={() => {
              this.scrollHere(this.skillRef);
            }}
          ></i>
        </Grid>
        <Grid
          container
          ref={this.skillRef}
          justify="center"
          className={`${
            this.state.isTop ? "" : ""
          } skillSection section-font-sec`}
        >
          <Grid className="section-title" item xs={12} sm={3}>
            <h3 className="section-font">Skills</h3>
          </Grid>
          <Grid className="section-desc" item xs={12} sm={9}>
            <Grid container>
              <Grid item xs={6} sm={3}>
                <h3 className="section-font-sec">Languages</h3>
                <ul>
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>JAVA</li>
                  <li>Swift</li>
                  <li>Golang</li>
                  <li>SQL</li>
                  <li>NoSQL</li>
                  <li>PHP</li>
                  <li>Matlab</li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
                <h3 className="section-font-sec">Frameworks</h3>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>jQuery</li>
                  <li>Wordpress</li>
                  <li>SwiftUI</li>
                  <li>UIKit</li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
                <h3 className="section-font-sec">Services</h3>
                <ul>
                  <li>AWS</li>
                  <li>GCP</li>
                  <li>Firebase</li>
                  <li>Wordpress</li>
                  <li>Heroku</li>
                  <li>DigitalOcean</li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
                <h3 className="section-font-sec">General</h3>
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>HTML/CSS</li>
                  <li>Matlab</li>
                  <li>Linux</li>
                  <li>Bash</li>
                  <li>Apache</li>
                  <li>NGINX</li>
                  <li>MongoDB</li>
                  <li>MYSQL</li>
                  <li>Socket.io</li>
                  <li>GIMP</li>
                  <li>XCode</li>
                </ul>
              </Grid>
            </Grid>

            {/* <div className="section-font"></div>
            <div></div> */}
          </Grid>
          <Grid className="section-footer" item xs={12}>
            <Grid
              container
              justify="center"
              alignItems="flex-end"
              style={{ height: "100%" }}
            >
              <Grid item xs={3}>
                <b>Jay Lim</b>
              </Grid>
              <Grid item xs={9}>
                <a
                  href="/Jay_Lim_Resume.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="link-resume"
                >
                  <span>Resume</span>
                  {/* <i className="fab fa-github-alt"></i> Github */}
                </a>
                {/* <span>Resume</span> */}{" "}
                <a
                  href="https://www.github.com/jlxc106"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="link-github"
                >
                  <span>Github</span>
                  {/* <i className="fab fa-github-alt"></i> Github */}
                </a>
                {/* <span>Github</span> */}
              </Grid>
            </Grid>
          </Grid>
          <i
            className="fas fa-angle-double-up chevron-down-icon"
            onClick={() => {
              this.scrollHere();
            }}
          ></i>
        </Grid>
      </>
    );
  }
}
