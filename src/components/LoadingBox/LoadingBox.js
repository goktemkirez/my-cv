import React from "react";
import { Skeleton } from "@mui/material";

import { StyledBox } from "./LoadingBox.style";

const LoadingBox = (props) => {

  return (
  <StyledBox>
    <Skeleton animation="pulse" width="240">
      loading
    </Skeleton>
  </StyledBox>
  );
};

export default LoadingBox;
