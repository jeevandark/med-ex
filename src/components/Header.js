import React from 'react';
import { AppBar } from 'material-ui';

const Header = (props) => {
    return (
        <AppBar title="Inbox" showMenuIconButton={false}>
            <div>{props.userName}</div>
        </AppBar>
    );
};

export default Header;