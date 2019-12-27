import React, { PureComponent } from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavBar extends PureComponent {
    render() {
        const { title } = this.props;
        return (
            <div className="navbar">
                <div className="navbar-item">
                    <div className="logo align-middle"><Link to="/"><img src="images/llab.png" /></Link></div>
                    <div className="logo-description align-middle">
                    TRÁNG FILM &amp; SCAN
                    <div>(Film development &amp; Scan)</div>
                    </div>
                </div>
                <div className="navbar-item">
                    <div className="title"><div className="title-content">{title?title:"LLAB"}</div></div>
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