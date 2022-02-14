import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: "100%",
    margin: 10,
    backgroundColor: "#24292F",
    color:"#D7DFE6"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color:"#D7DFE6"
  },
  pos: {
    marginBottom: 12,
    color:"#D7DFE6"
  },
  websiteButton:{
    backgroundColor:"#D7DFE6",
    color:"#000000",
    "&:hover": {
      backgroundColor:"#FFFFFF",
      color: "#000000"
    },
  }
}));