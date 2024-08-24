import { Typography } from "@mui/material";
import React from "react";
import "./Experiences.css";
import Card from "./Card";

export default () => {
  const classes = [
    {
      name: "Operating Systems",
      nickname: "CS162",
      position: "Head TA",
      grade: "A",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Machine Learning",
      nickname: "CS189",
      grade: "A",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Probability",
      nickname: "CS126",
      grade: "A",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Computer Security",
      nickname: "CS161",
      grade: "A",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Efficient Algorithms & Intractable Problems",
      nickname: "CS170",
      grade: "A",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Introduction to Artificial Intelligence",
      nickname: "CS188",
      grade: "A",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Data Structures and Algorithms",
      nickname: "CS61B",
      grade: "A+",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Structure & Interpretation of Computer Programs",
      nickname: "CS61A",
      grade: "A+",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Computer Architecture-Machine Structures",
      nickname: "CS61C",
      grade: "A",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="classes">
      <div className="exp-desc">
        <Typography variant="h2">Coursework</Typography>
        <Typography variant="body1">
          Classes I've taken over the past 3 years as an EECS student at UC
          Berkeley.
        </Typography>
      </div>
      <div className="exp-cards">
        {classes.map((course, index) => (
          <Card course={course} key={index} />
        ))}
      </div>
    </div>
  );
};
