import styled from "@emotion/styled/macro";
import { Box, Rating, Typography, Avatar } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width:250,
  margin:10,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  "&:hover": {
    [`${Title}`]: {
      color:"#FFFFFF",
    },
    [`${StyledRating}`]: {
      opacity: 1
    },
    [`${StyledAvatar}`]: {
      opacity: 0.3
    },
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color:"#D7DFE6",
  transition: "0.5s",
}));

export const StyledImageBox = styled(Box)(({ theme }) => ({
  width:200,
  height:200,
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
}));

export const StyledRating = styled(Rating)(({ theme }) => ({
  backgroundColor: "#000000",
  opacity: 0,
  transition: "0.5s",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  opacity: 1,
  transition: "0.5s",
  display: "block",
  width: "100%",
  height: "auto",
}));