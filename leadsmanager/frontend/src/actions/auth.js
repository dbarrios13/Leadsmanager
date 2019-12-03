import axios from "axios";
import { returnErrors } from "./messages";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "./types";

// check for token and load user
export const loadUser = () => (dispatch, getState) => {
  // user is loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

// check for token and load user
export const login = creds => dispatch => {
  axios
    .post("/api/auth/login", JSON.stringify(creds), tokenConfig())
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAIL });
    });
};

export const register = newUser => dispatch => {
  axios
    .post("/api/auth/register", JSON.stringify(newUser), tokenConfig())
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: REGISTER_FAIL });
    });
};

export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout", null, tokenConfig(getState))
    .then(res => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// config and token setup --- helper

export const tokenConfig = getState => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (getState) {
    const token = getState().auth.token;
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  } else {
    return config;
  }
};
