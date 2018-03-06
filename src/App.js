import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="mui-fluid-container">
          Top Bar
        </div>
        <div className="mui-container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
