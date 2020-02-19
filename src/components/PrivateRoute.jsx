// src/components/PrivateRoute.js

import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { AuthConsumer } from "../authContext/index";

const PrivateRoute = ({ component: Component, path, ...rest }) => (
  <AuthConsumer>
    {({ isLogin, currentUser, token }) => {
      const render = (props) => {
        if (isLogin) {
          return (
            <Component
              {...props}
              isLogin={isLogin}
              currentUser={currentUser}
              token={token}
            ></Component>
          );
        } else {
          window.location = "/login";
        }
      };
      return <Route path={path} render={render} {...rest} />;
    }}
  </AuthConsumer>
);
export default PrivateRoute;
