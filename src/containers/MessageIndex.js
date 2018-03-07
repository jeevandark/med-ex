import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { Paper } from 'material-ui';

function mapStateToProps(state) {
    let msgArr = state.messages.messagesIdArray.map(myId => state.messages.messagesById[myId]);
    return {
        messages: msgArr
    };
}

class MessageIndex extends Component {
    render() {
        return (
            <Paper className="message-list-wrapper">
                <Table className="message-list-table" onCellClick={this.onCellClick.bind(this)} selectable={false}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Subject</TableHeaderColumn>
                            <TableHeaderColumn>From</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true} className="t-body">
                        {this.renderMessagesTableBody()}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

    onCellClick(rowIndex) {
        console.log(this.props.messages);
    }

    renderMessagesTableBody() {
        if (this.props.messages != null) {
            return this.props.messages.map(item =>
                <TableRow key={item.id}>
                    <TableRowColumn className="subject-cell">
                        <span style={item.isRead ? {} : { fontWeight: 'bold' }}>{item.subject}</span> <br/>
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

export default connect(
    mapStateToProps,
)(MessageIndex);