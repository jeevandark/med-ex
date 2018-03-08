import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Paper } from 'material-ui';
import Message from '../components/Message';

function mapStateToProps(state) {
    let msgArr = state.messages.messagesIdArray.map(myId => state.messages.messagesById[myId]);
    return {
        messages: msgArr
    };
}

class MessageIndex extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/messages">
                    <Paper className="message-list-wrapper">
                        <Table className="message-list-table" onCellClick={this.onCellClick.bind(this)} selectable={false}>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn><h5>Subject</h5></TableHeaderColumn>
                                    <TableHeaderColumn><h5>From</h5></TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false} showRowHover={true} className="t-body">
                                {this.renderMessagesTableBody()}
                            </TableBody>
                        </Table>
                    </Paper>
                </Route>
                <Route path="/messages/:id" component={Message}/>
            </Switch>
        );
    }

    onCellClick(rowIndex) {
        let targetPath = `/messages/${this.props.messages[rowIndex].id}`;
        let isAtTarget = targetPath === this.props.location.pathname;
        if (!isAtTarget) {
            this.props.history.push(targetPath);
        }
    }

    renderMessagesTableBody() {
        if (this.props.messages != null) {
            return this.props.messages.map(item =>
                <TableRow key={item.id}>
                    <TableRowColumn className="subject-cell">
                        <span style={item.isRead ? {} : { fontWeight: 'bold' }}>{item.subject}</span> <br />
                        <span className="abbreviated-content">{item.content}</span>
                    </TableRowColumn>
                    <TableRowColumn>{item.from}</TableRowColumn>
                </TableRow>
            )
        } else {
            return null;
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
)(MessageIndex));