import React, { PureComponent } from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';

class NavBar extends PureComponent {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-item">
                    <div className="logo align-middle"><img src="images/llab.png" /></div>
                    <div className="logo-description align-middle">
                    TRÁNG FILM &amp; SCAN
                    <div>(Film development &amp; Scan)</div>
                    </div>
                </div>
                <div className="navbar-item">
                    <div className="title"><div className="title-content">TẠO ĐƠN HÀNG</div></div>
                </div>
                <div className="navbar-item align-middle">
                    <div className="menu align-middle hamburger-menu"><img src="images/list.png" className="hamburger-icon"/></div>
                </div>
                </div>

        );
    }
}

NavBar.propTypes = {

};

export default NavBar;