import { extractStatus, handleReduxAction } from "helpers/reduxHelpers";
import constants from "reduxUtils/actions";
import {
  defaultSingleObjectState,
  defaultSingleObjectPayload,
} from "utils/constants";

const initialState = {
  register: defaultSingleObjectState,
  login: defaultSingleObjectState,
};

export default function (
  state = initialState,
  { type, payload = defaultSingleObjectPayload }: Action
) {
  const status = extractStatus(type);

  switch (type) {
    case constants.REGISTER_USER.success:
    case constants.REGISTER_USER.request:
    case constants.REGISTER_USER.error:
      return handleReduxAction(state, payload, status, "register");
    default:
      return state;
  }
}
