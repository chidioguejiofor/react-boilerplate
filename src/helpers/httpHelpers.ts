import { put } from "redux-saga/effects";
import { message } from "antd";

// This file contains helper methods that make working with the API a lot easier

// Originally got this idea from [Chima Chukwuemeka](https://twitter.com/chukwuemekachm).
// Although I have improved it since.
export function* errorHandler(
  error,
  errorActionType: string,
  customMessage: string | boolean = true
) {
  if (error.response) {
    if (error.response.status === 401) {
      // TODO: handle auth errors and log out user
    }

    if (customMessage && error.response.data && error.response.data.message) {
      // Show error messages here
      // TODO: The position of the message is dependent on your API.
      //    Refactor as needed
      const msgFromAPI = error.response.data.message;
      const msg =
        typeof customMessage === "string" ? customMessage : msgFromAPI;

      msg && message.error(msg);
    }

    yield put({
      type: errorActionType,
      payload: error.response.data,
    });

    return null;
  } else if (error.request) {
    // TODO: handle network errors
    //  This could be due to the user's browser being offline or our servers being down
    //  This occured when the URL I sent was undefined
    //  This also occured when the server is offline. I guess advising the user to check their
    //  or contact support if the problem persists is appropriate
    yield put({
      type: errorActionType,
      payload: {},
    });
    yield message.error("Poor internet connection", 1);
    message.info("Please check your internet connection.");
  } else {
    // TODO: should we leave this handler? It's rare and means the code is faulty so the request was never step up
    //   We could just tell the user here that there was an unknown error that they should contact support
  }
}

export function* successHandler(
  response,
  successActionType: string,
  customMessage: string | boolean = true
) {
  const data = yield response.data;

  if (
    customMessage &&
    response.status >= 200 &&
    response.status < 299 &&
    data.message
  ) {
    const msg =
      typeof customMessage === "string" ? customMessage : data.message;

    msg && message.success(data.message);
  }

  yield put({
    type: successActionType,
    payload: data,
  });
}
