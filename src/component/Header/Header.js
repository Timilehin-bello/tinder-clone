import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';
import { IconButton } from '@material-ui/core';


function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder-logo" className="header__logo" />
            <IconButton>
                <ForumIcon className="header__icon" />
            </IconButton>

        </div>
    )
}

export default Header;
