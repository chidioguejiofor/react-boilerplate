import { generateActionCreator } from "helpers/reduxHelpers";
import * as constants from "./constants";

export const registerUser = generateActionCreator(
  constants.REGISTER_USER.request
);

export default constants;
