import {
  MAP_PAGE_LOADED,
  ASYNC_START,
  ASYNC_END,
  SET_SELECTED_DESTINATION_FEATURES
} from "../constants/actionTypes";

// const defaultState = {
//   filterDimensions: {
//     attraction_type: [
//       { label: "Wildlife", value: "Wildlife", checked: true },
//       { labe: "Wildlife, Scenery & Landscapes", value: "Wildlife, Scenery & Landscapes", checked: true },
//       { label: "Wildlife, Culture", value: "", checked: true }
//     ],
//     region: [
//       { label: "South Rift", value: "South Rift", checked: true },
//       { label: "South Rift", value: "South Rift", checked: true },
//       { label: "South Rift", value: "South Rift", checked: true }
//     ]
//   }
// };

export default (state = {}, action) => {
  switch (action.type) {
    case MAP_PAGE_LOADED:
      return {
        ...state,
        magical: action.payload[0],
        bonfire: action.payload[1].rows
      };
    case ASYNC_START:
      if (action.subtype === MAP_PAGE_LOADED) {
        return { ...state, inProgress: true };
      }
      return { ...state };
    case ASYNC_END:
      return {
        ...state,
        inProgress: false
      };
    case SET_SELECTED_DESTINATION_FEATURES:
      return {
        ...state,
        clickedDest: action.features
      };
    default:
      return state;
  }
};
