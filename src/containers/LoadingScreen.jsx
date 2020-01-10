import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./LoadingScreen.css";

class LoadingScreen extends PureComponent {
  render() {
    return (
      <div className="container plashscreen-wrapper">
        <div className="row">
          <div className="col-5">
            <img className="plashscreen-logo" src="/images/llab_logo.png" />
          </div>
          <div className="col-7 plashscreen-text">
              
            <div className="plashscreen-text-vi">TRÁNG FILM & SCAN</div>
            <div className="plashscreen-text-en">(FILM DEVELOPMENT & SCAN)</div>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
        </div>
      </div>
    );
  }
}

LoadingScreen.propTypes = {};

export default LoadingScreen;
