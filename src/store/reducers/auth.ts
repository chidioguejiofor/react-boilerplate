import authConstants from "store/actions";
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
  const { data, errors } = payload;

  switch (type) {
    case authConstants.REGISTER_REQUEST:
      return {
        ...state,
        register: {
          ...state.register,
          processing: true,
          processed: false,
        },
      };
    case authConstants.REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          processing: false,
          processed: true,
          success: true,
          data,
        },
      };

    case authConstants.REGISTER_ERROR:
      return {
        ...state,
        register: {
          ...state.register,
          processing: false,
          processed: true,
          success: false,
          data: {},
          errors,
        },
      };
    default:
      return state;
  }
}
