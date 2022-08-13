import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: 0,
  backgroundColor: "#000000",
  paddingRight: '20px', 
  paddingLeft: '20px', 
  paddingTop: '70px',
  [theme.breakpoints.down('sm')]: {
    paddingRight: '10px',
    paddingLeft: '10px',
    paddingTop: '50px'
  },
}));

