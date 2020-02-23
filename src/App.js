import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Particles from "react-particles-js";
import { Route, Switch } from "react-router-dom";
// import {
//   TransitionGroup,
//   CSSTransition,
//   Transition
// } from "react-transition-group";

import Home from "./Home";
import Projects from "./Projects";

function App(props) {
  console.log(props);
  // const { pathname, key } = props;
  return (
    <div className="App">
      {/* <TransitionGroup component={null}>
        <Transition
          key={key}
          appear={true}
          onEnter={(node, appears) => {
            console.log("send nodes: ",node);
            console.log("appearz: ", appears);
          }}
          timeout={{ enter: 750, exit: 0 }}
        > */}
          <Switch>
            <Route path="/skills" component={Projects} />
            <Route path="/" component={Home} />
          </Switch>
        {/* </Transition>
      </TransitionGroup> */}
    </div>
  );
}

export default App;

// export const play = (pathname, node, appears) => {
//   const delay = appears ? 0 : 0.5
//   let timeline

//   // if (pathname === '/')
//     timeline = getHomeTimeline(node, delay)
//   // else
//   //   timeline = getDefaultTimeline(node, delay)

//   timeline.play()
// }

// const getHomeTimeline = (node, delay) => {
//   const timeline = new Timeline({ paused: true });
//   const texts = node.querySelectorAll('h1 > div');

//   timeline
//     .from(node, 0, { display: 'none', autoAlpha: 0, delay })
//     .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

//   return timeline
// }
