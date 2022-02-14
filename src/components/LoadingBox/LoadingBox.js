import React from "react";
import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { useStyles } from "./LoadingBox.style";

const LoadingBox = (props) => {
  const classes = useStyles();

  return (
  <Box className={classes.loadingBox}>
    <Skeleton animation="pulse" width="240">
      loading
    </Skeleton>
  </Box>
  );
};

export default LoadingBox;
