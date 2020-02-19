import { API_URL, API_ROUTE } from "./appConstants";
import axios from "axios";

export const loginWithEmailAndPassword = (email, password) => {
  return new Promise((resolve, reject) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify({ email: email, password });
      axios.post(API_ROUTE.LOGIN, body, config).then((response) => {
        console.log(response);
        if (response.data.data.can_login) {
          resolve(response.data.data.token);
        } else {
          reject("User can not login!");
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const getLoginToken = () => {
  return new Promise((resolve, reject) => {
    try {
      let config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      axios.post(API_ROUTE.LOGIN, config).then((response) => {
        // console.log(response);
        if (response.data.data.can_login) {
          resolve(response.data.data.token);
        } else {
          reject("User can not login!");
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const getCurrentLoginSession = () => {
  const localToken = localStorage.getItem("llab_tk");
  return localToken;
};

export const isLogin = () => {
  const currentSession = getCurrentLoginSession();
  if (currentSession) {
    // try {
    // }
  }
  return currentSession ? true : false;
};
