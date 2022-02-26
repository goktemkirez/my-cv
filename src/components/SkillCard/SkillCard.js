import React from "react";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import StarOutlined from '@material-ui/icons/Star';
import Avatar from "@material-ui/core/Avatar";

import noImage from '../../assets/images/noImage.png';
import { useStyles } from "./SkillCard.style";

export default function SkillCard(props) {
  const { name, score, img } = props;
  const classes = useStyles();

  return (
    <Box className={classes.skillBox} component="fieldset" mb={3} borderColor="transparent">
      <Typography className={classes.skillName} align="center" component="legend">{name}</Typography>
      <Box className={classes.skillImageBox}>
      <Rating className={classes.skillRating} value={score} size="medium" readOnly emptyIcon={<StarOutlined style={{ opacity: 0.5, color: "#FFFFFF" }} />} />
      <Avatar
        variant="rounded"
        alt=" "
        src={img ? img : noImage}
        className={classes.skillImage}
      />
      </Box>
    </Box>
  );
}
