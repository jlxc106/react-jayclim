import React, { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
export default class Projects extends Component {
  render() {
    return (
      <>
        <Particles
          className="particles-canvas-projects"
          width="100vw"
          height="100vh"
          params={{
            particles: {
              number: {
                value: 75
              },
              color: {
                value: "#fff"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 1,
                  color: "#ccc"
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  sync: true
                }
              },
              size: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 30
                }
              },
              line_linked: {
                enable: false,
                distance: 120,
                color: "#fff"
              },
              move: {
                enable: true,
                speed: 2,
                direction: "top-right"
              }
            },
            interactivity: {
              events: {
                // onhover: {
                //   enable: true,
                //   mode: "repulse"
                // },
                onclick: {
                  enable: true,
                  mode: "push"
                }
              }
            }
          }}
        />
        <div className="skills-container">
          <div>
            <Link to="/">
              <h2>
                <i className="fas fa-angle-left"></i> Home
              </h2>
            </Link>
          </div>
          <div className="skills">

            
            <h2>Languages</h2>
            <ul>
              <li>
                <h3>Javascript</h3>
              </li>
              <li>
                <h3>Swift</h3>
              </li>
              <li>
                <h3>Golang</h3>
              </li>{" "}
              <li>
                <h3>Python</h3>
              </li>
              <li>
                <h3>PHP</h3>
              </li>
              <li>
                <h3>C/C++</h3>
              </li>
              <li>
                <h3>JAVA/Kotlin</h3>
              </li>
            </ul>
          </div>


            {/* <h2>Web/iOS Frameworks</h2>
            <ul>
              <li>
                <h3>Javascript</h3>
              </li>
              <li>
                <h3>Swift</h3>
              </li>
              <li>
                <h3>Golang</h3>
              </li>{" "}
              <li>
                <h3>Python</h3>
              </li>
              <li>
                <h3>PHP</h3>
              </li>
              <li>
                <h3>C/C++</h3>
              </li>
              <li>
                <h3>JAVA/Kotlin</h3>
              </li>
            </ul> */}

          {/* <div>languages</div>
          <div>Web/iOS Frameworks</div>
          <div>Databases</div>
          <div>Web Servers</div>
          <div>Services</div>
          <div>Git</div>
          <div>OOP, Data Structures & Algorithms</div>
          <div>Linux</div> */}
          {/* <div>HTML CSS JS - 3 years</div>
            <div>React & Redux</div>
            <div>Node.js & Express</div>
            <div>SQL & NoSQL</div>
            <div>Linux - 5 years</div>
            <div>iOS Development - Swift, UIKit, SwiftUI</div>
            <div>Git</div>
            <div>Wordpress & PHP</div>
            <div>JAVA Kotlin C C++</div>
            <div>Python Golang</div>
            <div>Jira & Atlassian</div>
            <div>Nginx & Apache</div>
            <div>OOP</div>
            <div>AWS & GCP</div>
            <div>Spanner</div>
            <div>AGILE/SCRUM</div> */}

          {/* languages - Javascript & Node.js, Swift, Golang, Python, PHP, C, C++, JAVA, Kotlin */}

          {/* Web/iOS Frameworks - React, Redux, SwiftUI, UIKit, Wordpress */}

          {/* Databases - SQL, NoSQL, MYSQL, MongoDB, GCP Spanner, Core Data */}

          {/* Web Servers - Nginx, Apache, Express */}

          {/* Services - AWS, GCP, DigitalOcean, Heroku, Firebase */}

          {/* Git, AGILE/SCRUM, Jira/Atlassian */}

          {/* OOP, Data Structures & Algorithms */}

          {/* APIs */}

          {/* Linux */}
        </div>
      </>
    );
  }
}
