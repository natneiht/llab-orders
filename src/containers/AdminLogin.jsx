import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import { withAuthContext } from "../authContext/index";
import { loginWithEmailAndPassword } from "../loginFunction";
import "./AdminLogin.css";

class AdminLogin extends PureComponent {
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // console.log(isAuthenticated);
  // loginWith;
  handleLogin = async () => {
    const token = await loginWithEmailAndPassword();
    this.props.setLoginStatus("guest", token);
  };
  render() {
    console.log(this.props);

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
              <button
                className="login-form-item"
                onClick={() => this.handleLogin()}
              >
                ĐĂNG NHẬP
              </button>
              <div>
                {/* {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
              )}

              {isAuthenticated && (
                <button onClick={() => logout()}>Log out</button>
              )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthContext(AdminLogin);
