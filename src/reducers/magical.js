import { MAP_PAGE_LOADED } from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case MAP_PAGE_LOADED:
      return {
        ...state,
        sites: action.payload
      };
    default:
      return state;
  }
};
