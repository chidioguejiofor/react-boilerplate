import { fork } from "redux-saga/effects";
import authData from "./auth";

export default function* rootSaga() {
  yield fork(authData);
}
