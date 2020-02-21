import React, { PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import HomePage from "./containers/HomePage";
import CustomerFormInput from "./components/CustomerFormInput";
import AdminLogin from "./containers/AdminLogin";
import OrderManager from "./containers/OrderManager";
import SearchPage from "./containers/SearchPage";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import LoadingScreen from "./containers/LoadingScreen";
import { AuthProvider } from "./authContext/index";
import PrivateRoute from "./components/PrivateRoute";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      currentUser: null,
      token: null
    };
  }

  componentDidMount() {
    const localSession = JSON.parse(localStorage.getItem("llab"));
    if (localSession) {
      const { isLogin, currentUser, token } = localSession;
      this.setState({ isLogin: isLogin ? true : false, currentUser, token });
    }
  }
  setLoginStatus = (currentUser, token) => {
    if (currentUser && token) {
      const loginState = { isLogin: true, currentUser, token };
      this.setState(loginState);
      localStorage.setItem("llab", JSON.stringify(loginState));
      window.location = "/";
    }
  };

  clearLoginStatus = () => {
    this.setState({ isLogin: false, token: null });
    localStorage.removeItem("llab");
  };

  render() {
    const { isLogin, currentUser, token } = this.state;
    return (
      <AuthProvider
        value={{
          isLogin,
          currentUser,
          token,
          setLoginStatus: this.setLoginStatus,
          clearLoginStatus: this.clearLoginStatus
        }}
      >
        <div className="App">
          <BrowserRouter>
            <NavBar tittle="LLAB" />
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route
                exact
                path="/login"
                component={(props) => (
                  <AdminLogin setLoginStatus={this.setLoginStatus} />
                )}
              />
              <PrivateRoute exact path="/manager" component={OrderManager} />
              <PrivateRoute exact path="/search" component={SearchPage} />
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
          </BrowserRouter>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
