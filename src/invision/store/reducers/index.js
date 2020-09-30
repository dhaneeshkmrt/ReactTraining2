import { combineReducers } from "redux";

import { movieReducer } from "./movie.reducer";
import { popupReducer } from "./popup.reducer";

export const reducers = combineReducers({
  movies: movieReducer,
  popups: popupReducer
})

