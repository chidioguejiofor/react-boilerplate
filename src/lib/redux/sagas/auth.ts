import { fork, takeLatest } from "redux-saga/effects";
import constants from "lib/redux/actions";

function* signUpUser(action: Action) {
  try {
    yield console.log("Signning Up User....");
    // TODO: This is where we make API calls for signup
    //  The call below is an example of what you do after axios call
    //
    //  yield put(successHandler(response, constants.REGISTER_USER.success));
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
  yield takeLatest(constants.LOGIN.request, loginUser);
}

export function* watchSignupUser() {
  yield takeLatest(constants.REGISTER_USER.request, signUpUser);
}

export default function* authSaga() {
  yield fork(watchSignupUser);
  yield fork(watchLoginUser);
}
