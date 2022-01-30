import React from "react";
// import { useState } from "react";
import {
  Avatar,
  // useTheme,
  Drawer,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  FileCopyOutlined,
  PersonOutlined,
  WorkOutlined,
  CodeOutlined,
  PlusOneOutlined,
  ContactMailOutlined
} from "@material-ui/icons";

import { useStyles } from "./SideBar.style";
import { ROUTES } from "../../routes";
import pp from '../../assets/images/pp.jpg';

export default function SideBar(props) {
  const classes = useStyles();
  // const theme = useTheme();
  // const [open, setOpen] = useState(true);
  const open = true;
  let history = useHistory();
  const itemsList = [
    {
      text: "Projects",
      icon: <FileCopyOutlined />,
      onClick: () => history.push(ROUTES.PROJECTS),
    },
    {
      text: "Experiences",
      icon: <WorkOutlined />,
      onClick: () => history.push(ROUTES.EXPERIENCES),
    },
    {
      text: "Skills",
      icon: <CodeOutlined />,
      onClick: () => history.push(ROUTES.SKILLS),
    },
    {
      text: "Personal",
      icon: <PersonOutlined />,
      onClick: () => history.push(ROUTES.PERSONAL),
    },
  ];
  const itemsListBottom = [
    {
      text: "Offer a Job",
      icon: <PlusOneOutlined />,
      onClick: () => alert("I'm working on it :)"),
    },
    {
      text: "Contact",
      icon: <ContactMailOutlined />,
      onClick: () => alert("I'm working on it :)"),
    },
  ];

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Container className={classes.drawerHeader}>
        <Container className={classes.logoDiv}>
          <Avatar
            variant="rounded"
            alt=" "
            src={pp}
            className={classes.img}
          />
          <Typography variant="h6">Orçun Göktem Kirez</Typography>
        </Container>
      </Container>
      <Container className={classes.listDiv}>
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem
                className={classes.sidebarButton1}
                button
                onClick={onClick}
                key={text}
              >
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <List>
          {itemsListBottom.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button onClick={onClick} key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Drawer>
    </>
  );
}
