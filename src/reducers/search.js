import {
  LOAD_SEARCH_SUGGESTIONS,
  SET_SUGGESTION_VALUE,
  SET_SELECTED_SUGGESTION,
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
        suggestions: action.suggestions.features
      };
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
    case UNSET_SELECTED_SUGGESTION:
      return {
        ...state,
        value: "",
        suggestions: [],
        selectedSuggestion: null
      };
    default:
      return state;
  }
};
