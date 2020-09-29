import { GET_FULL_MOVIE_LIST, ADD_MOVIE } from "../actions/action.types";
import thumbnail from '../../../assets/images/thumbnail.png';

const initValue = {
  fullMovieList: [],
  movieList:[],
}
export function movieReducer(state = initValue, action){
  switch (action.type) {
    case GET_FULL_MOVIE_LIST:
      return { ...state, fullMovieList: action.payload , movieList: [...action.payload]}
      case ADD_MOVIE:
      return { ...state, fullMovieList: [...state.fullMovieList, action.payload]}
    default:
      return state;
  }
}
