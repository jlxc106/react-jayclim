import React, { Component } from "react";
import Particles from "react-particles-js";

export default class Projects extends Component {
  render() {
    return <>
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
      <div className="container">
          <div className="">
        
          </div>

          Jeff is kewl
          
          </div>
    </>;
  }
}
