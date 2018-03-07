import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './main.css';
import MessageIndex from './containers/MessageIndex';
import Header from './components/Header';
import { setActiveUser } from './actions/userActions';
import { fetchAllMessages } from './actions/messagesActions';
import { mock_user } from "./api/mock-user";

function mapStateToProps(state) {
  return {
    fullUserName: state.user.firstName + ' ' + state.user.lastName,
    firstName: state.user.firstName,
    numOfMessages: state.messages.messagesIdArray.length,
    numOfUnreadMessages: state.messages.numOfUnreadMessages
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadUser: () => {
      dispatch(setActiveUser(mock_user));
    },
    fetchAllMessages: () => {
      dispatch(fetchAllMessages());
    }
  }
}


class App extends Component {

  componentDidMount() {
    this.props.loadUser();
    this.props.fetchAllMessages();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header userName={this.props.fullUserName} />
          <div className="mui-container views-wrapper">
            <Switch>
              <Route exact path="/" render={() => <Home name={this.props.firstName} numOfMessages={this.props.numOfMessages} numOfUnreadMessages={this.props.numOfUnreadMessages}/>} />
              <Route path="/messages" component={MessageIndex} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
