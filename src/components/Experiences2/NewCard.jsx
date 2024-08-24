import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaControlCard(props) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      className="card"
      style={{ backgroundColor: "rgba(71, 68, 68, 0.5)", color: "white" }}
    >
      <Box sx={{ position: "relative", paddingTop: "30%", overflow: "hidden" }}>
        <Link
          href={props.experience.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardMedia
            component="img"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: props.experience.objectPosition,
            }}
            image={props.experience.logo}
            title={props.experience.company}
          />
        </Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", flex: "1 0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.experience.position}
          </Typography>
          <Typography variant="subtitle1" color="rgba(255, 255, 255, 0.8)">
            {props.experience.team}
          </Typography>
          <Typography
            variant="subtitle2"
            color="rgba(255, 255, 255, 0.6)"
            letterSpacing="0.3px"
          >
            {props.experience.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
