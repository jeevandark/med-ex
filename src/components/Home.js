import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Paper, FlatButton } from "material-ui";

export default class Home extends Component {
  render() {
    return (
      <Paper zDepth={2} className="welcome-message">
        <h3>Hello {this.props.name}</h3>
        {this.counters}
        {this.buttonGotoMessages}
      </Paper>
    );
  }

  get counters() {
    const total = this.props.numOfMessages;
    const hasMoreThanOne = total > 1;
    const hasUnread = this.props.numOfUnreadMessages > 0;
    const isEmpty = total === 0;
    return (
      <h4 className="counters">
        {hasUnread ? (
          <span>You have {this.props.numOfUnreadMessages} unread messages out of {total} total</span>
        ) : (
            isEmpty ? (
              <span>Your inbox is empty</span>
            ) : (
                <span>You have {total} message{hasMoreThanOne ? 's' : ''} in your inbox</span>
              )
          )}
      </h4>
    );
  }

  get buttonGotoMessages() {
    return (
      <FlatButton containerElement={<Link to="/messages" />}
        label="View Messages" primary={true}>
      </FlatButton>
    );
  }
}
