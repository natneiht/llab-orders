import React, { PureComponent } from "react";
import "./NavBar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = (props) => {
    // const { title } = this.props;
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    console.log(isAuthenticated);
    return (
      <div className="navbar">
        <div className="navbar-item">
          <div className="logo align-middle">
            <Link to="/">
              <img src="images/llab.png" />
            </Link>
          </div>
          <div className="logo-description align-middle">
            TRÁNG FILM &amp; SCAN
            <div>(Film development &amp; Scan)</div>
          </div>
        </div>
        <div className="navbar-item">
          <div className="title">
            <div className="title-content">{props.title ? props.title : "LLAB"}</div>
          </div>
        </div>
        <div className="navbar-item align-middle">
        <div className="hamburger-menu">
          <div className="menu align-middle hamburger-icon">
            <img src="images/list.png" className="hamburger-icon" />
            <ul className="menu-ul">
              <li className="hamburger-menu-item" onClick={()=>loginWithRedirect()}>Photo printing</li><hr />
              <li className="hamburger-menu-item"><Link to='/profile'>Profile</Link></li>
              <li className="hamburger-menu-item"><Link to='/login'>Login</Link></li>
              <li className="hamburger-menu-item">Logout</li>
            </ul>
          </div>
          

          </div>
        </div>
      </div>
    );

}

NavBar.propTypes = {};

export default NavBar;
