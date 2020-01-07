import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import { useAuth0 } from "../react-auth0-spa";

import "./AdminLogin.css";

const AdminLogin = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    console.log(isAuthenticated);
    return (
      <div>
        <NavBar title="ĐĂNG NHẬP" />
        <div className="container">
          <div className="col-4 login-form">
            <div className="row">
              <input type="text" className="login-form-item" placeholder="ID" />
            </div>
            <div className="row">
              <input
                type="text"
                className="login-form-item"
                placeholder="Password"
              />
            </div>
            <div className="row">
              <button className="login-form-item">ĐĂNG NHẬP</button>
              <div>
                {!isAuthenticated && (
                  <button onClick={() => loginWithRedirect({})}>Log in</button>
                )}

                {isAuthenticated && (
                  <button onClick={() => logout()}>Log out</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default AdminLogin;
