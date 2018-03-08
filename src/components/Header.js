import React from 'react';
import { withRouter } from "react-router-dom";
import { AppBar, i, Badge, IconButton } from 'material-ui';

const Header = (props) => {
    const kTargetPath = "/messages";
    const isAtTarget = props.location.pathname.toLowerCase() === kTargetPath;
    const styles = {
        titleClickable: {
            cursor: 'pointer',
        },
        titleNotClickable: {
            cursor: 'default'
        }
    };
    return (
        <AppBar title={<span onClick={() => {
            if (!isAtTarget) {
                props.history.push(kTargetPath);
            }
        }} style={isAtTarget ? styles.titleNotClickable : styles.titleClickable}>Inbox</span>} showMenuIconButton={false} iconElementRight={
            <div className="header-elements-wrapper">
                <Badge
                    badgeContent={props.numOfUnreadMessages}
                    secondary={true}
                    badgeStyle={{ top: -2, right: 2, display: props.numOfUnreadMessages <= 0 ? "none" : "flex" }} style={{ padding: 0 }}>
                    <IconButton disableTouchRipple={true} style={{ cursor: 'default' }}>
                        <i className="material-icons email-icon">email</i>
                    </IconButton>
                </Badge>
                <div className="user-menu">
                    <i className="material-icons">account_circle</i>
                    <span className="user-menu-label">{props.userName}</span>
                </div>
            </div>
        } />
    );
};

export default withRouter(Header);