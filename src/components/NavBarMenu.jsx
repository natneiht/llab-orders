import React, { PureComponent } from "react";
import "./NavBar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Close from "../svg/close.svg";
import ManageIcon from "../svg/manage.svg";
// import ManageIcon from '../svg/manage.svg'
import LogoutIcon from "../svg/logout.svg";
import FindIcon from "../svg/find.svg";

class NavBarMenu extends PureComponent {
  render() {
    return (
      <div className="nav-bar-menu">
        <ul className="menu-ul">
          <li className="hamburger-menu-item">
            <img
              src={Close}
              className="close-hamburger-icon"
              onClick={() => this.props.toogleMenu()}
            />
          </li>
          <hr />
          <li className="hamburger-menu-item">
            <img src={ManageIcon} className="close-hamburger-icon" />
          </li>
          <hr />
          <li className="hamburger-menu-item">
            <img src={FindIcon} className="close-hamburger-icon" />
          </li>
          <hr />
          <li className="hamburger-menu-item">
            <Link to="/">Home Page</Link>
          </li>
          <li className="hamburger-menu-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="hamburger-menu-item">
            <img src={LogoutIcon} className="close-hamburger-icon" />
          </li>
        </ul>
      </div>
    );
  }
}

NavBarMenu.propTypes = {};

export default NavBarMenu;
