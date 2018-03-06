import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class MessageIndex extends Component {
    render() {
        return (
            <div>
                Message Index
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(MessageIndex);