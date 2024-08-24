import { Typography } from "@mui/material";
import React from "react";
import "../Classes2/Experiences.css";
import Card from "./NewCard";

export default () => {
  const experiences = [
    {
      company: "Databricks",
      location: "Mountain View",
      position: "ML & Software Engineering Intern",
      team: "Applied AI Team",
      logo: "/databricks7.png",
      website: "https://www.databricks.com/",
      description:
        "Designed and implemented Large Language Models to optimally filter out calls to Databricks' Coding Assistant Autocomplete model to cut GPU utilization costs by 40%.",
    },
    {
      company: "Tanium",
      location: "Remote",
      position: "Software Engineering Intern",
      team: "R&D Data Access & Integration Team",
      logo: "/tanium.jpg",
      website: "https://www.tanium.com/",
      description:
        "Developed a GraphQL Subgraph for enabling clients to programmatically configure custom processors of security data collected by Tanium Connect agents.",
    },
    {
      company: "Allen Institute for Brain Science",
      location: "Remote",
      position: "Software Engineering Intern",
      team: "R&D Team",
      logo: "/allenn.jpg",
      website:
        "https://alleninstitute.org/division/brain-science/?utm_source=google&utm_medium=cpc&utm_campaign=brand_allen_brain_science&gad_source=1&gclid=CjwKCAjwiaa2BhAiEiwAQBgyHh7OBzeg-2ADJwzK83mKdwY3bhe4wPsMPgp5aJ5cKDVB4I-8tnLPaRoCo_4QAvD_BwE",
      description:
        "Developed the External Reference Index Service (ERIS) that retrieves and caches data from external medical sources to expand the Allen BrainMap Project knowledge base.",
    },
  ];

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="experiences">
        <div className="exp-desc">
          <Typography variant="h2">Experiences</Typography>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            Software Engineering Internships from the summers of '22-'24
          </Typography>
        </div>
        <div className="exp-cards">
          {experiences.map((experience, index) => (
            <Card experience={experience} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
