import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Divider } from 'material-ui';
import { markAsRead } from '../actions/messagesActions';

function mapStateToProps(state) {
    return {
        messagesById: state.messages.messagesById
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        markAsRead: () => {
            dispatch(markAsRead(ownProps.match.params.id));
        }
    }
}

class Message extends Component {
    render() {
        console.log(this.props);
        let myMessage = null;
        let idOfMessage = -Infinity;
        try {
            idOfMessage = this.props.match.params.id;
        } catch (e) { }
        if (idOfMessage !== -Infinity && this.props.messagesById != null) {
            myMessage = this.props.messagesById[idOfMessage];
            if (myMessage != null) {
                this.props.markAsRead(myMessage.id);
            }
        }
        return (
            <Paper className="message-wrapper">
                {
                    myMessage != null ? (
                        <div>
                            <div className="subject">
                                <h4>{myMessage.subject}</h4>
                            </div>
                            <div className="from">
                                <span>From:</span> <h5>{myMessage.from}</h5>
                            </div>
                            <Divider/>
                            <div className="content">
                                {myMessage.content}
                            </div>
                        </div>
                    ) : (
                            <h4>Message could not be found</h4>
                        )
                }
            </Paper>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps, 
)(Message);
