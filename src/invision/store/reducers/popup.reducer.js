import { ADD_MOVIE_POPUP } from "../actions/action.types";
export function popupReducer(state = {}, action) {
  switch (action.type) {
    case ADD_MOVIE_POPUP:
      return  state;

    default:
      return state;
  }
}