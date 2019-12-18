import React, { PureComponent } from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';

class NavBar extends PureComponent {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-item">
                    <div className="logo"><img src="images/llab.png" /></div>
                    <div className="logo-description">
                    TRÁNG FILM &amp; SCAN
                    <div>(Film development &amp; Scan)</div>
                    </div>
                </div>
                <div className="navbar-item">
                    <div className="title"><div className="title-content">TẠO ĐƠN HÀNG</div></div>
                </div>
                <div className="navbar-item">
                    <div className="menu"><img src="images/LIST.png" /></div>
                </div>
                </div>

        );
    }
}

NavBar.propTypes = {

};

export default NavBar;