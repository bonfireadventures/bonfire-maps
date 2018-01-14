import home from "./reducers/home";
import common from "./reducers/common";
import magical from "./reducers/magical";
import { loadingBarReducer } from "react-redux-loading-bar";

import { combineReducers } from "redux";

export default combineReducers({
  home,
  common,
  magical,
  loadingBar: loadingBarReducer
});
