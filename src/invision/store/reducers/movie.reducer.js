import {
  GET_FULL_MOVIE_LIST, ADD_MOVIE, FILTER_CATEGORY_BY_NAME, FILTER_CATEGORY_BY_SEARCH_KEYWORD, EDIT_MOVIE, DELETE_MOVIE,
  SORT_MOVIE, GET_MOVIE
} from "../actions/action.types";

import { sort } from "../../utils/movie-sort.util";

const initValue = {
  fullMovieList: [],
  movieList: [],
  movieDetail: null,
  genres: ["All"],
  filterCategoryName: '',
  searchKeyword: '',
  sortValue: 'releasedDate'
}


export function movieReducer(state = initValue, action) {
  switch (action.type) {
    case GET_FULL_MOVIE_LIST:
      const fullMovieList = action.payload;

      const genres = []
      fullMovieList.forEach(movie => {
        if (!genres.includes(movie.genre)) {
          genres.push(movie.genre);
        }
      });
      return { ...state, fullMovieList, movieList: sort([...fullMovieList], 'releasedDate'), genres: ['All', ...genres] };

    case ADD_MOVIE:
      return { ...state, fullMovieList: [...state.fullMovieList, action.payload], movieList: sort([...state.movieList, action.payload], state.sortValue) }

    case EDIT_MOVIE: {
      const fullMovieList = [...state.fullMovieList];
      const index = fullMovieList.findIndex(movie => movie.id === action.payload.id);
      fullMovieList[index] = action.payload;
      const movieList = [...state.movieList];
      const index1 = state.movieList.findIndex(movie => movie.id === action.payload.id);
      movieList[index1] = action.payload;
      return { ...state, fullMovieList, movieList };
    }

    case DELETE_MOVIE: {
      const fullMovieList = state.fullMovieList.filter(movie => movie.id !== action.payload);
      const movieList = state.movieList.filter(movie => movie.id !== action.payload);
      return { ...state, fullMovieList, movieList };
    }

    case GET_MOVIE: {
      const movie = state.fullMovieList.find(movie => movie.id === +action.payload);
      return { ...state, movieDetail: movie };
    }
    case SORT_MOVIE: {
      const newSortValue = action.payload;
      const movieList = [...state.movieList];
      const sortedMovieList = sort(movieList, newSortValue);
      return { ...state, sortValue: newSortValue, movieList: sortedMovieList }
    }

    case FILTER_CATEGORY_BY_NAME: {
      const filterCategoryName = action.payload === 'ALL' ? '' : action.payload;
      const movieList = state.fullMovieList.filter(movie => movie.genre.toLowerCase().includes(filterCategoryName.toLowerCase()));
      return { ...state, filterCategoryName, movieList: sort(movieList, state.sortValue) };
    }

    case FILTER_CATEGORY_BY_SEARCH_KEYWORD: {
      const searchKeyword = action.payload;
      const movieList = state.fullMovieList.filter(movie => movie.title.toLowerCase().includes(searchKeyword.toLowerCase()));
      return { ...state, searchKeyword, movieList };
    }

    default:
      return state;
  }
}


