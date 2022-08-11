import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "'Roboto', sans-serif",
        h6: {
            fontSize: '16px',
            '@media (max-width:600px)': {
                fontSize: '12px',
            },
        },
    },
    palette: {
        customized: {
            main: "#000000",
            contrastText: "#D7DFE6"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#000000",
                    color: "#D7DFE6",
                }
            }
        },
        MuiIconButton: {
            variants: [
                {
                    props: { variant: 'customized' },
                    style: {
                        color:'#D7DFE6', 
                        "&:hover": {
                            color: "#FFFFFF",
                        }
                    },
                },
            ],
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    backgroundColor: "#000000"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#000000"
                }
            }
        },
        MuiListItem: {
            variants: [
                {
                    props: { variant: 'customized' },
                    style: {
                        color: "#D7DFE6",
                        '&:hover': {
                            color: "#FFFFFF"
                        },
                    },
                },
            ],
        },
        MuiListItemIcon: {
            variants: [
                {
                    props: { variant: 'customized' },
                    style: {
                        color: "#D7DFE6",
                        '&:hover': {
                            color: "#FFFFFF"
                        },
                    },
                },
            ],
        },
    }
});

export default theme;