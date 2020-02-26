import React from 'react';
import './App.css';
import './css/styles.css';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { DefaultLayout } from './container/DefaultLayout';
import routeDefinitions from './routes';
export const history = createBrowserHistory();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e7d32'
    },
    secondary: {
      light: '#daa520',
      main: '#388e3c',
      dark: '#ba000d',
      contrastText: '#000'
    },
    textPrimary: {
      main: '#daa520'
    }
  }
});
const App = () => {
    return ( 
      <MuiThemeProvider theme={theme}>
        <Router history={history} >
            <Switch>
            {/* {/* <Route exact path="/auth" name="Login" component={AuthPage} />
            // <Route exact path="/auth/signup" name="Register" component={CompleteSignup}/> */}    
             <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
        </Router>
        </MuiThemeProvider>
    );
}

export default App;
