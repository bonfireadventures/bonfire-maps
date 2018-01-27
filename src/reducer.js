import home from "./reducers/home";
import common from "./reducers/common";
import sites from "./reducers/sites";

import { combineReducers } from "redux";

export default combineReducers({
  home,
  common,
  sites
});
