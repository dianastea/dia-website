import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";
import { ReactComponent as IPadIcon } from "../../items/ipad2.svg"; // Adjust the path as needed
import "../Classes2/Experiences.css";

const IpadCard = () => {
  return (
    // className="classes" style={{ gridRowGap: "0" }}
    <div style={{ marginTop: "40px" }}>
      <Box
        sx={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr",
          justifyItems: "center",
          overflow: "hidden",
          paddingTop: "10px",
        }}
      >
        <IPadIcon
          style={{
            position: "absolute",
            // bottom: 0,
            zIndex: 1,
            justifySelf: "center",
          }}
        />
        <Box
          //   sx={{
          //     position: "absolute",
          //     top: "50%",
          //     left: "50%",
          //     transform: "translate(-50%, -50%)",
          //     // color: "white",
          //     zIndex: 2, // Ensure text is on top of SVG
          //   }}
          sx={{
            display: "grid",
            justifyItems: "center",
            zIndex: 2,
            position: "relative",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            width: "90%",
            maxWidth: "900px",
            marginTop: "50px",
            justifyContent: "center",
            maxHeight: "600px",
          }}
        >
          <div style={{ justifySelf: "left" }}>
            <Typography
              variant="h3"
              style={{ textAlign: "left", width: "100%", fontWeight: "300" }}
            >
              University of California-Berkeley 🐻
            </Typography>
            <Typography
              variant="h5"
              style={{ textAlign: "left", width: "100%" }}
            >
              Electrical Engineering and Computer Science, B.S.
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
            >
              May 2025
            </Typography>
          </div>
          <div
            className="activites"
            style={{
              display: "grid",
              gridTemplateRows: "repeat(2, minmax(200px, 1fr))",
              justifyItems: "start",
              width: "100%",
              alignItems: "start",
              paddingBottom: "30px",
              // gridTemplateColumns: "1fr",
            }}
          >
            <div className="activity-container">
              <div>
                <a href="https://www.ml.berkeley.edu">
                  <img
                    src="/mlab-white.png"
                    alt="ML@B"
                    className="activity-img zoomable-svg"
                  />
                </a>
              </div>
              <div>
                <Typography variant="h4">
                  Machine Learning @ Berkeley
                </Typography>
                <Typography
                  variant="h5"
                  style={{ rgba: "rgba(255, 255, 255, 0.5)" }}
                >
                  Internal Vice President (IVP)
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    letterSpacing: 1,
                  }}
                >
                  IVP (Fall, Spring 2024), Project Lead (Fall 2023)
                </Typography>
              </div>
            </div>
            <div className="activity-container">
              <div>
                <a href="https://cs162.org">
                  <img
                    src="/cs162.png"
                    alt="CS162"
                    className="activity-img zoomable-svg"
                  />
                </a>
              </div>
              <div>
                <Typography variant="h4">CS 162: Operating Systems</Typography>
                <Typography
                  variant="h5"
                  style={{ rgba: "rgba(255, 255, 255, 0.5)" }}
                >
                  Co-Head Teaching Assistant
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "rgba(255, 255, 255, 0.5)",
                    letterSpacing: 1,
                  }}
                >
                  CS 162 Head TA (Fall 2024), CS 162 TA (Spring 2024)
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default IpadCard;
