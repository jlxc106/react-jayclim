import React, { createRef } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ParticlesComponent from "./sections/Particles";
import SkillSection from "./sections/Skill";
import ExperienceSection from "./sections/Experience";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

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

  componentDidMount() {
    window.addEventListener("scroll", evt => this.handleScroll(evt), {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("mousewheel", evt => this.handleScroll(evt));
  }

  handleScroll(event) {
    document.querySelector(".particles-canvas-home").style.opacity = ((window.innerHeight - window.scrollY) / window.innerHeight) > 0 ? ((window.innerHeight - window.scrollY) / window.innerHeight) : 0
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
        <ParticlesComponent
          ref={this.canvasRef}
        />
        <div className="main-text-container">
          <h1>Jay Lim</h1>
          <div>
            <h3>
              <i className="fas fa-briefcase"></i> Web/iOS Software Engineer
            </h3>
            <h3>
              <a
                href="https://www.github.com/jlxc106"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github-alt"></i> Github
              </a>
            </h3>
            <h3>
              <a
                href="https://www.linkedin.com/in/jayl1m/"
                rel="noopener noreferrer"
                target="_blank"
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
        {/* <img
          className="chevron-down-icon"
          onClick={() => {
            this.scrollHere(1);
          }}
          src="chevron-down-solid.svg"
        ></img> */}
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
            <img className="v-center profile-img" src="jay.jpeg"></img>
            {/* <a
              href="/JAY_LIM_RESUME_MAR_20.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fas fa-file-alt fa-4x file-img"></i>
            </a> */}
          </Grid>

          <Grid item xs={12} sm={9}>
            <p className="section-font">
              Hello, my name is <b>Jay Lim</b>; I'm a{" "}
              <b>web/iOS software engineer</b>, with a passion for learning and
              solving problems.
            </p>
            {/* <span className="section-font">
              <a
                href="/JAY_LIM_RESUME_MAR_20.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-file-alt file-img"></i>
              </a>
              Resume
            </span> */}
          </Grid>
          <i
            className="fas fa-chevron-down chevron-down-icon"
            onClick={() => {
              this.scrollHere(this.experienceRef);
            }}
          ></i>
          {/* <img
            className="chevron-down-icon"
            onClick={() => {
              this.scrollHere(2);
            }}
            src="chevron-down-solid.svg"
          ></img> */}
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
            <div></div>
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
          className={`${this.state.isTop ? "" : ""} skillSection section-font-sec`}
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
            <Grid container>
              <Grid item xs={3}>
              <span>Jay Lim</span>
              </Grid>
              <Grid item xs={9}>
              <a
                href="/JAY_LIM_RESUME_MAR_20.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Resume</span>
                {/* <i className="fab fa-github-alt"></i> Github */}
              </a>
              {/* <span>Resume</span> */}
              {" "}
              <a
                href="https://www.github.com/jlxc106"
                rel="noopener noreferrer"
                target="_blank"
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
          {/* <Grid className="" item xs={12} sm={4}>
            <img className="v-center profile-img" src="jay.jpeg"></img>
          </Grid>

          <Grid item xs={12} sm={8}>
            <p className="section-font">
              I'm Jay Lim; I'm a web/iOS software engineer, with a passion for
              learning and solving problems.
            </p>
          </Grid>
          <i
            className="fas fa-chevron-down chevron-down-icon"
            onClick={() => {
              this.scrollHere(this.skillRef);
            }}
          ></i> */}
          {/* <img
            className="chevron-down-icon"
            onClick={() => {
              this.scrollHere(3);
            }}
            src="chevron-down-solid.svg"
          ></img> */}
        </Grid>
      </>
    );

  }
}