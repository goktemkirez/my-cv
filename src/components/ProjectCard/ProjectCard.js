import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { useHistory } from "react-router-dom";

import { useStyles } from "./ProjectCard.style";

export default function ProjectCard(props) {
  const { name, img, description, codeUrl, liveUrl } = props;
  const classes = useStyles();
  //   let history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={img}
          title={name}
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" target="_blank" href={codeUrl}>
          Code
        </Button>
        <Button
          size="small"
          color="primary" 
          target="_blank"
          href={`${liveUrl}`} 
        >
          Discover
        </Button>
      </CardActions>
    </Card>
  );
}
