import { StyledBox } from "./PageWrapper.style";

const PageWrapper = (props) => {
  const { children } = props;

  return (
    <StyledBox>
      {children}
    </StyledBox>
  );
};

export default PageWrapper;
