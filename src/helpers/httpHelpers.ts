import { put } from "redux-saga/effects";
import { message } from "antd";

// This file contains helper methods that make working with the API a lot easier

// Originally got this idea from [Chima Chukwuemeka](https://twitter.com/chukwuemekachm).
// Although I have improved it since.
export function* errorHandler(error, errorCb) {
  if (error.response) {
    if (error.response.status === 401) {
      // TODO: handle auth errors and log out user
    }

    if (error.response.data && error.response.data.message) {
      // Show error messages here
      const msg = error.response.data.message;

      message.error(msg);
    }

    yield put(errorCb(error.response.data));

    return null;
  } else if (error.request) {
    // TODO: handle network errors
    //  This could be due to the user's browser being offline or our servers being down
    //  This occured when the URL I sent was undefined
    //  This also occured when the server is offline. I guess advising the user to check their
    //  or contact support if the problem persists is appropriate
    yield put(errorCb({}));
    yield message.error("Poor internet connection", 1);
    message.info("Please check your internet connection.");
  } else {
    // TODO: should we leave this handler? It's rare and means the code is faulty so the request was never step up
    //   We could just tell the user here that there was an unknown error that they should contact support
  }
}

export function* successHandler(response, successCb, notify = true) {
  const data = yield response.data;

  if (
    notify &&
    response.status >= 200 &&
    response.status < 299 &&
    data.message
  ) {
    message.success(data.message);
  }

  yield put(successCb(data));
}
