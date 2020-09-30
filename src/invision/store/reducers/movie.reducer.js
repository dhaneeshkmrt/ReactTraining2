import { GET_FULL_MOVIE_LIST, ADD_MOVIE, FILTER_CATEGORY_BY_NAME, FILTER_CATEGORY_BY_SEARCH_KEYWORD } from "../actions/action.types";

const initValue = {
  fullMovieList: [],
  filterCategoryName: '',
  searchKeyword: ''
}

export function movieReducer(state = initValue, action) {
  switch (action.type) {
    case GET_FULL_MOVIE_LIST:
      return { ...state, fullMovieList: action.payload, movieList: [...action.payload] }
    case ADD_MOVIE:
      return { ...state, fullMovieList: [...state.fullMovieList, action.payload] }
    case FILTER_CATEGORY_BY_NAME:
      return { ...state, filterCategoryName: action.payload }
    case FILTER_CATEGORY_BY_SEARCH_KEYWORD:
      return { ...state, searchKeyword: action.payload }
    default:
      return state;
  }
}
