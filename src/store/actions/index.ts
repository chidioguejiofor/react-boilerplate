import * as authConstants from "./constants";

export const registerUser = (payload) => ({
  type: authConstants.REGISTER_REQUEST,
  payload,
});

export const registerUserError = (payload) => ({
  type: authConstants.REGISTER_ERROR,
  payload,
});

export const registerUserSuccess = (payload) => ({
  type: authConstants.REGISTER_SUCCESS,
  payload,
});

export default authConstants;
