import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  loadingBox:{
    backgroundColor: "#24292F",
    color: "#FFFFFF",
    width:"100%",
    margin:0,
    padding:0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  timelineCardImage:{
    width:150,
    height:150
  }
}));
