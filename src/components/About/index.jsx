import { Typography } from "@mui/material";
import React from "react";
import About from "./About";

export default () => {
  return (
    <div className="about" style={{ rowGap: "0", marginBottom: "0" }}>
      <div className="exp-desc">
        <Typography variant="h2">About Me</Typography>
        <Typography variant="body1">
          Classes I've taken over the past 3 years as an EECS student at UC
          Berkeley.
        </Typography>
      </div>
      <div className="ipad">
        <About />
      </div>
    </div>
    // <div className="about">
    //     <About/>
    // </div>
  );
};
