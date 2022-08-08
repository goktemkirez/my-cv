import useMediaQuery from "@mui/material/useMediaQuery";

import { StyledBox } from "./PageWrapper.style";

const PageWrapper = (props) => {
  const { children } = props;
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <StyledBox sx={isMobile ? { paddingRight: '10px', paddingLeft: '10px', paddingTop: '70px' }
      : { paddingRight: '20px', paddingLeft: '20px', paddingTop: '70px' }}>
      {children}
    </StyledBox>
  );
};

export default PageWrapper;
