import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  skillBox:{
    position: "relative",
    width:150,
    height:150,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    "&:hover": {
      "& $skillName": {
        color:"#FFFFFF",
      },
      "& $skillRating": {
        opacity: 1
      },
      "& $skillImage": {
        opacity: 0.3
      }
    },
  },
  skillName:{
    color:"#D7DFE6",
    transition: "0.5s",
  },
  skillRating:{
    backgroundColor: "#000000",
    opacity: 0,
    transition: "0.5s",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  skillImage:{
    opacity: 1,
    transition: "0.5s",
    display: "block",
    width: "100%",
    height: "auto",
  }
}));