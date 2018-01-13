import home from "./reducers/home";
import common from "./reducers/common";

import { combineReducers } from "redux";

export default combineReducers({
  home,
  common
});
