import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  Avatar,
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

import { ROUTES } from "../../routes";
import pp from '../../assets/images/pp.jpg';
import myLogo from '../../assets/images/myLogo.jpg';
import github from '../../assets/images/githubIcon.png';
import linkedin from '../../assets/images/linkedinIcon.svg';
import twitter from '../../assets/images/twitterIcon.png';
import instagram from '../../assets/images/instagramIcon.png';

import { useStyles } from "./PersistentDrawerLeft.style";

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(true);  //false yap
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Container className={classes.appBarContainer}>
            <Container className={classes.appBarHeader}>
              <Avatar
                variant="rounded"
                alt=" "
                src={pp}
                className={classes.appBarHeaderImg}
              />
              <Typography className={classes.appBarHeaderName} variant="h6">Orçun Göktem Kirez</Typography>
            </Container>
            <Container className={classes.appBarLogo}>
              <Avatar
                variant="rounded"
                alt=""
                src={myLogo}
                className={classes.appBarLogoImg}
              />
            </Container>
            <Container className={classes.appBarSocial}>
              <Avatar
                variant="rounded"
                alt=""
                src={github}
                className={classes.appBarSocialImg}
                onClick={() => window.open('https://github.com/goktemkirez', '_blank')}
              />
              <Avatar
                variant="rounded"
                alt=""
                src={twitter}
                className={classes.appBarSocialImg}
                onClick={() => window.open('https://twitter.com/goktemkirez', '_blank')}
              />
              <Avatar
                variant="rounded"
                alt=""
                src={linkedin}
                className={classes.appBarSocialImg}
                onClick={() => window.open('https://www.linkedin.com/in/goktemkirez/', '_blank')}
              />
              <Avatar
                variant="rounded"
                alt=""
                src={instagram}
                className={classes.appBarSocialImg}
                onClick={() => window.open('https://www.instagram.com/goktemkirez/', '_blank')}
              />
            </Container>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton className={classes.drawerHeaderCloseSidebarIcon} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem
                className={classes.sidebarButton}
                button
                onClick={onClick}
                key={text}
              >
                {icon && <ListItemIcon className={classes.sidebarIcon}>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {itemsListBottom.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem
                className={classes.sidebarButton} button onClick={onClick} key={text}>
                {icon && <ListItemIcon className={classes.sidebarIcon}>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      </main>
    </div>
  );
}