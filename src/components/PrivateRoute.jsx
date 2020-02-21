// src/components/PrivateRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext, {
  AuthConsumer,
  withAuthContext
} from "../authContext/index";

const PrivateRoute = ({ render, component: Component, ...rest }) => {
  const context = React.useContext(AuthContext);
  const { isLogin } = context;
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page

    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
// } else {
//   window.location = "/login";
// }
// };
export default PrivateRoute;
