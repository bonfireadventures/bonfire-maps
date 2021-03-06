import {
  ASYNC_START,
  LOAD_SEARCH_SUGGESTIONS,
  SET_SUGGESTION_VALUE,
  SET_SELECTED_SUGGESTION,
  CLEAR_SUGGESTIONS,
  UNSET_SELECTED_SUGGESTION
} from "../constants/actionTypes";

const defaultState = {
  value: "",
  suggestions: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_SEARCH_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload.features
      };
    case ASYNC_START:
      if (action.subtype === LOAD_SEARCH_SUGGESTIONS) {
        return { ...state, inProgress: true };
      }
      return { ...state };
    case SET_SUGGESTION_VALUE:
      return {
        ...state,
        value: action.value
      };
    case SET_SELECTED_SUGGESTION:
      return {
        ...state,
        selectedSuggestion: action.selectedFeature
      };
    case CLEAR_SUGGESTIONS:
      return {
        ...state,
        // selectedSuggestion: null,
        suggestions: []
      };
    case UNSET_SELECTED_SUGGESTION:
      return {
        ...state,
        // selectedSuggestion: null,
        value:"",
        selectedSuggestion: null
      };
    default:
      return state;
  }
};
