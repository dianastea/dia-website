import React, { useEffect, useState } from "react";
import { grid2Classes, Typography } from "@mui/material";
import { ReactComponent as MusicIcon } from "../../public/music.svg"; // Adjust the path as needed
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default () => {
  const identities = [
    "software engineer",
    "Berkeley student",
    "teaching assistant",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % 3);
    }, 3000);
  }, [index]);

  return (
    <div className="hero">
      <div></div>
      <div className="heroMainBox">
        <div className="heroText">
          <Typography variant="h1">Hi! I'm Diana.</Typography>
          <Typography variant="h2">
            I'm a{" "}
            <span style={{ whiteSpace: "pre-wrap" }}>
              {identities[index].split("").map((letter, i) => {
                return (
                  <span
                    className="heroTextSpecial"
                    style={{
                      "--i": i,
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          </Typography>
        </div>

        <div className="musicIcon turn-svg rotate-svg">
          <MusicIcon height="95%" />
        </div>
        <div className="socialMediaIcons">
          <a
            href="https://www.github.com/dianastea"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/diana-poplacenel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            href="mailto:diana.poplacenel@berkeley.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={50} />
          </a>
          {/* <FaTwitter size={50} /> */}
          {/* <FaInstagram size={50} /> */}
        </div>
      </div>
    </div>
  );
};
