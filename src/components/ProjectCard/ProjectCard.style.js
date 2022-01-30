import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    margin: 10,
    backgroundColor: "#24292F"
  },
  media: {
    height: 350,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  },
  content:{
    color:"#D7DFE6"
  }
}));