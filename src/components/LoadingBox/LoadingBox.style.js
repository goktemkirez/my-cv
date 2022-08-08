import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#24292F",
  color: "#FFFFFF",
  width: "100%",
  margin: 0,
  marginTop: '20px',
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

