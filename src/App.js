import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './main.css';
import MessageIndex from './containers/MessageIndex';
import Header from './components/Header';

function mapStateToProps(state) {
  return {

  };
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header />
        <div className="mui-container views-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/messages" component={MessageIndex} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
)(App));
