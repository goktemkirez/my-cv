import { Skeleton } from "@mui/material";

import { StyledBox } from "./LoadingBox.style";

const LoadingBox = (props) => {

  return (
  <StyledBox>
    <Skeleton animation="pulse" width="100%" sx={{ textAlign:'center'}}>
      loading
    </Skeleton>
  </StyledBox>
  );
};

export default LoadingBox;
