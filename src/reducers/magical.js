import { MAP_PAGE_LOADED } from "../constants/actionTypes";

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
        sites: action.payload
      };
    default:
      return state;
  }
};
