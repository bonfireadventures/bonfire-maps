import { APP_LOAD } from "../constants/actionTypes";

const defaultState = {
  appName: "Bonfire Maps",
  token: null,
  viewChangeCounter: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      };
    default:
      return state;
  }
};
