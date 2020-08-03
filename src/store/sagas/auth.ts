import { fork, takeLatest, put } from "redux-saga/effects";
import constants, { registerUserSuccess } from "store/actions";

function* signUpUser(action: Action) {
  try {
    console.log("Signning Up User....");
    yield put(registerUserSuccess({}));
    // TODO: This is where we make API calls for signup
  } catch (error) {
    // TODO: Whenever an error occurs
  }
}

function* loginUser(action: Action) {
  try {
    yield console.log("Logging in User....");
    // TODO: This is where we make API calls for signup
  } catch (error) {
    // TODO: Whenever an error occurs
  }
}

export function* watchLoginUser() {
  yield takeLatest(constants.LOGIN_REQUEST, loginUser);
}

export function* watchSignupUser() {
  yield takeLatest(constants.REGISTER_REQUEST, signUpUser);
}

export default function* authSaga() {
  yield fork(watchSignupUser);
  yield fork(watchLoginUser);
}
