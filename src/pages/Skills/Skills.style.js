import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#000000",
    color:"#FFFFFF"
  },
  boxStyle: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
    color: "#4DDA63",
  },
  skillBox:{
    position: "relative",
    "&:hover": {
      "& $skillRating": {
        opacity: 1
      },
      "& $skillImage": {
        opacity: 0.3
      }
    },
  },
  skillRating:{
    backgroundColor: "#000000",
    opacity: 0,
    transition: .5,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  skillImage:{
    opacity: 1,
    transition: 0.5,
    display: "block",
    width: 150,
    height: "auto",
  }
}));
