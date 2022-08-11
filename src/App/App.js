import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import theme from '../theme';

import { ROUTES, routes } from "../routes";
import PageWrapper from "../components/PageWrapper";
import PersistentDrawer from '../components/PersistentDrawer';
import {AppWrapper} from './App.style'

function App() {

  const RenderedRoute = (props) => {
    const { path, component, name, isPublic } = props;
    const Component = component;

    return (
      <Route
        path={path}
        name={name}
        exact
        render={(props) => {
          if (isPublic) {
            return (
              <>
                <PersistentDrawer />
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
    <ThemeProvider theme={theme}>
      <AppWrapper>
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
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
