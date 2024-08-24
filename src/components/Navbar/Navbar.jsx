import React from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";

import "@fontsource/roboto/300.css";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="Nav">
      <Link
        to="hero"
        className="Diana zoomable-svg"
        smooth={true}
        duration={500}
      >
        {/* <Typography variant="h4">diana.</Typography> */}
        <img src="/animoji.png" alt="Logo" className="logo" />
      </Link>
      <div className="buttons">
        {/* <a className="underLine2 hide_on_responsive" href="/">
          <Typography variant="h5">about me</Typography>
        </a> */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="underLine2 hide_on_responsive"
        >
          <Typography variant="h5">about me</Typography>
        </Link>

        <Link
          to="experiences"
          className="underLine2 hide_on_responsive"
          smooth={true}
          duration={500}
        >
          <Typography variant="h5" className="hide_on_responsive underline2">
            experiences
          </Typography>
        </Link>
        <Link
          to="classes"
          className="underLine2 hide_on_responsive"
          smooth={true}
          duration={500}
        >
          <Typography variant="h5" className="hide_on_responsive underline2">
            classes
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
