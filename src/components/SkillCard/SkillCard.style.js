import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  skillBox:{
    position: "relative",
    width:250,
    margin:10,
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
  skillImageBox:{
    width:200,
    height:200,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
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