import home from "./reducers/home";
import common from "./reducers/common";
import magical from "./reducers/magical";

import { combineReducers } from "redux";

export default combineReducers({
  home,
  common,
  magical
});
