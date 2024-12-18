import { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Box } from '@mui/material';
import {
    FileCopyOutlined,
    PersonOutlined,
    WorkOutlined,
    CodeOutlined,
    ContactMailOutlined
  } from "@mui/icons-material";
  
import { ROUTES } from "../../routes";
import SocialMedia from '../SocialMedia';

import pp from '../../assets/images/pp.jpeg';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawer() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    useEffect(() => {
      checkScreenSize();
    }, []);
  
    const checkScreenSize = async () => {
      try {
        let currentHideNav = window.innerWidth;
        if (currentHideNav <= 600) {
          setOpen(false);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
      }
    };

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
        text: "Contact",
        icon: <ContactMailOutlined />,
        onClick: () => {
            window.location.href = "mailto:ogkirez@gmail.com";
        },
      },
    ];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        variant="customized"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center'}}>
                            <Avatar
                                sx={{ marginRight: '10px'}}
                                variant="rounded"
                                alt=" "
                                src={pp}
                            />
                            <Typography variant="h6" component="div">
                                Orçun Göktem Kirez
                            </Typography>
                        </Box>
                        <SocialMedia />
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer 
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose} variant="customized">
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {itemsList.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem
                                variant="customized"
                                button
                                onClick={onClick}
                                key={text}
                            >
                                {icon && <ListItemIcon variant="customized">{icon}</ListItemIcon>}
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
                            <ListItem variant="customized" button onClick={onClick} key={text}>
                                {icon && <ListItemIcon variant="customized">{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
            <Main open={open}>
            </Main>
        </Box>
    );
}
