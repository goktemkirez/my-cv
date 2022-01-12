// import { useEffect, useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Box } from "@material-ui/core";

import { ROUTES, routes } from "../routes";
import { useStyles } from "./App.style";
import SideBar from "../components/SideBar";
import PageWrapper from "../components/PageWrapper";

function App() {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const isUserLoggedIn = true;
  const classes = useStyles();

  const RenderedRoute = (props) => {
    const { path, component, name, isPublic } = props;
    const Component = component;

    return (
      <Route
        path={path}
        name={name}
        exact
        render={(props) => {
          if (isUserLoggedIn || isPublic) {
            return (
              <>
                {/* {!isPublic && <SideBar />} */}
                <SideBar />
                <PageWrapper>
                  <Component {...props} />
                </PageWrapper>
              </>
            );
          } else {
            return <Redirect to={ROUTES.DASHBOARD} />;
          }
        }}
      />
    );
  };

  return (
    <Box className={classes.appWrapper}>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            return (
              <RenderedRoute
                key={route.path}
                exact
                path={route.path}
                component={route.component}
                isPublic={route.isPublic}
              />
            );
          })}
          <Redirect to={isUserLoggedIn ? ROUTES.PERSONAL : ROUTES.PERSONAL} />
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
