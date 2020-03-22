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
    // window.addEventListener(
    //   "mousewheel",
    //   evt => {
    //     // evt.preventDefault();
    //     this.handleScroll(evt);
    //   },
    //   { passive: true }
    // );

    window.addEventListener("scroll", evt => this.handleScroll(evt), {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("mousewheel", evt => this.handleScroll(evt));
  }

  handleScroll(event) {
    // console.log(event)
    // console.log(this.state.last_y)
    // console.log(window.scrollY)

    // let newY;
    // let isTop = false;
    // console.log((window.innerHeight - window.scrollY) / window.innerHeight);
    // console.log(this.canvasRef);
    // if (this.canvasRef.current) {
    // this.canvasRef.current.style.opacity =
    // (window.innerHeight - window.scrollY) / window.innerHeight;
    // }
    if (window.scrollY > window.innerHeight / 2) {
      // isTop = false;
      this.setState({ isTop: false });
    } else {
      // isTop = true;
      this.setState({ isTop: true });
    }

    // if (this.state.last_y > window.scrollY) {
    //   console.log("going up");
    //   newY =
    //     this.state.last_y - window.innerHeight > 0
    //       ? this.state.last_y - window.innerHeight
    //       : 0;
    // } else if (this.state.last_y < window.scrollY) {
    //   console.log("going down");
    //   newY = this.state.last_y + window.innerHeight;
    // }

    // console.log(newY);
    // this.setState(
    //   { isTop }
    //   // () =>
    //   //   setTimeout(function() {
    //   //     window.scrollTo(0, newY);
    //   //     console.log("at ", window.scrollY, " scroll to", newY);
    //   //   }, 100)
    //   // window.scrollTo(0, newY)
    // );

    // if (window.scrollY > window.innerHeight/2){
    //   this.setState({isTop: false})
    // } else {
    //   this.setState({isTop: true})
    // }
    // do something like call `this.setState`
    // access window.scrollY etc
  }

  scrollHere(ref) {
    if (!ref) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, ref.current.offsetTop);
    }
  }

  fadeInOut(ref) {
    ref.current.style.opacity = 0;
  }

  render() {
    return (
      <>
        <ParticlesComponent
          ref={this.canvasRef}
          // forwardRef={this.canvasRef}
          isTop={this.state.isTop}
          // canvasRef={this.canvasRef}
          fadeInOut={this.fadeInOut}
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
          className={`${this.state.isTop ? "invis" : ""} profileSection`}
        >
          <Grid className="img-container" item xs={12} sm={4}>
            <img className="v-center profile-img" src="jay.jpeg"></img>
            {/* <a
              href="/JAY_LIM_RESUME_MAR_20.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fas fa-file-alt fa-4x file-img"></i>
            </a> */}
          </Grid>

          <Grid item xs={12} sm={8}>
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
          className={`${this.state.isTop ? "invis" : ""} experienceSection`}
        >
          <Grid className="section-font" item xs={12} sm={4}>
            <h3 className="section-font">Experience</h3>
          </Grid>
          <Grid className="section-font" item xs={12} sm={8}>
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
          className={`${this.state.isTop ? "invis" : ""} skillSection section-font-sec`}
        >
          <Grid className="" item xs={12} sm={4}>
            <h3 className="section-font">Skills</h3>
          </Grid>
          <Grid className="" item xs={12} sm={8}>
            <Grid container>
              <Grid item xs={3}>
                <h3 className="section-font-sec">Languages</h3>

              </Grid>
              <Grid item xs={3}>
                <h3 className="section-font-sec">Frameworks</h3>
              </Grid>
              <Grid item xs={3}>
                <h3 className="section-font-sec">Services</h3>
              </Grid>
              <Grid item xs={3}>
                <h3 className="section-font-sec">General</h3>
              </Grid>
            </Grid>

            <div className="section-font"></div>
            <div></div>
          </Grid>
          <i
            className="fas fa-chevron-down chevron-down-icon"
            onClick={() => {
              this.scrollHere(this.skillRef);
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
