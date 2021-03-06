import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#000000",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'#D7DFE6',
    backgroundColor:"#24292F",
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor:'#24292F'
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000000",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    height:64
  },
  drawerHeaderCloseSidebarIcon:{
    color:'#D7DFE6',
    backgroundColor:'#24292F',
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor:'#24292F'
    },
  },
  appBarContainer:{
    display:"flex",
    justifyContent:"space-between",
    padding:0,
    margin:0, 
    width: '100%',
    maxWidth:'100%'
  },
  appBarHeader:{
    display:"flex",
    marginLeft:0,
    paddingLeft:0,
    alignItems:"center",
  },
  appBarHeaderImg:{
    marginRight:10
  },
  appBarHeaderName:{
    fontSize:16,
    color:"#D7DFE6"
  },
  appBarLogo:{
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    padding:0,
    margin:0,
  },
  appBarLogoImg:{
    width:80
  },
  appBarSocial:{
    display:'flex',
    justifyContent:"flex-end",
    alignItems:'center',
    padding:0,
    margin:0,
  },
  appBarSocialImg:{
    marginRight:5,
    marginLeft:5,
    cursor:"pointer",
    width:20,
    height:20
  },
  sidebarButton:{
    color:"#D7DFE6",
    "&:hover": {
      color: "#FFFFFF"
    },
  },
  sidebarIcon:{
    color:"#D7DFE6",
    "&:hover": {
      color: "#FFFFFF"
    },
  },
  sidebarDivider:{
    backgroundColor:"#D7DFE6"
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
