import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarOutlined from '@material-ui/icons/Star'; import {
  Avatar
} from "@material-ui/core";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import { useStyles } from "./Skills.style";

import pp from '../../assets/images/pp.jpg';

function Skills() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
    } catch (error) {
      console.log("error", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div>
      <Container className={classes.containerStyle}>
        {loading ? (
          <LoadingBox />
        ) : (
          <>
            <Box className={classes.skillBox} component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Test</Typography>
              <Rating className={classes.skillRating} value={5} size="medium" readOnly emptyIcon={<StarOutlined style={{ opacity: 0.5, color: "#FFFFFF" }} />} />
              <Avatar
                variant="rounded"
                alt=" "
                src={pp}
                className={classes.skillImage}
              />
            </Box>
            <Box className={classes.skillBox} component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">React.js</Typography>
              <Rating className={classes.skillRating} value={2} size="medium" readOnly emptyIcon={<StarOutlined style={{ opacity: 0.5, color: "#FFFFFF" }} />} />
              <Avatar
                variant="rounded"
                alt=" "
                src={pp}
                className={classes.skillImage}
              />
            </Box>
            <Box className={classes.skillBox} component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">C#</Typography>
              <Rating className={classes.skillRating} value={3} size="medium" readOnly emptyIcon={<StarOutlined style={{ opacity: 0.5, color: "#FFFFFF" }} />} />
              <Avatar
                variant="rounded"
                alt=" "
                src={pp}
                className={classes.skillImage}
              />
            </Box>
          </>
        )}
      </Container>
    </div>
  );
}

export default Skills;
