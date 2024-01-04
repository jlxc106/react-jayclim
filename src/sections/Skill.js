import React from "react";
import Grid from "@material-ui/core/Grid";


export default class SkillSection extends React.Component {
  render() {
    return (
      <>
        <Grid className="" item xs={12} sm={4}>
          <img className="v-center profile-img" src="jay.jpg"></img>
        </Grid>

        <Grid item xs={12} sm={8}>
          <p className="v-center">
            I'm Jay Lim; I'm a web/iOS software engineer, with a passion for
            learning and solving problems.
          </p>
        </Grid>
        <i
          className="fas fa-angle-double-up chevron-down-icon color-black"
          onClick={() => {
            this.scrollHere(0);
          }}
        ></i>
        {/* <img
            className="chevron-down-icon"
            onClick={() => {
              this.scrollHere(0);
            }}
            src="angle-double-up-solid.svg"
          ></img> */}
      </>
    );
  }
}
