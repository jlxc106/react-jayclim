import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Particles
        className="particles-canvas-home"
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
        <h1>Jay Lim</h1>
        <div>
          <h3
          // className={isShown1 ? "inverted-color" : ""}
          // onMouseEnter={() => setIsShown1(true)}
          // onMouseLeave={() => setIsShown1(false)}
          >
            <i className="fas fa-briefcase"></i> Web/iOS Software Engineer
          </h3>
          <h3
          // onClick={() => {
          //   props.history.push("/skills");
          // }}
          >
            <Link to="/skills">
              <i className="fas fa-code"></i> Skills
            </Link>
          </h3>

          <h3
          // className={isShown2 ? "inverted-color" : ""}
          // onMouseEnter={() => setIsShown2(true)}
          // onMouseLeave={() => setIsShown2(false)}
          >
            <a
              href="https://www.github.com/jlxc106"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-github-alt"></i> Github
            </a>
          </h3>
          <h3
          // className={isShown3 ? " inverted-color" : ""}
          // onMouseEnter={() => setIsShown3(true)}
          // onMouseLeave={() => setIsShown3(false)}
          >
            <i className="fas fa-at"></i> [first-name][last_name]106@gmail.com
          </h3>
        </div>
      </div>
    </>
  );
}
