import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./ExperienceCard.style";

export default function ProjectCard(props) {
  const { company, date, title, department, responsibilities, projects, website } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          {company}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {department}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {date}
        </Typography>
          <br />
        <Typography>
          <u>Responsibilities</u>
        </Typography>
        <Typography variant="body2" component="div">
          {responsibilities.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}
        </Typography>
        <Typography>
          <u>Projects</u>
        </Typography>
        <Typography variant="body2" component="div">
          {projects.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.websiteButton}
          size="small"
          target="_blank"
          href={`${website}`}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
}
