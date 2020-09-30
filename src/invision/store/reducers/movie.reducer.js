import {
  GET_FULL_MOVIE_LIST, ADD_MOVIE, FILTER_CATEGORY_BY_NAME, FILTER_CATEGORY_BY_SEARCH_KEYWORD, EDIT_MOVIE, DELETE_MOVIE,
  SORT_MOVIE,
} from "../actions/action.types";

import { sort } from "../../utils/movie-sort.util";

const initValue = {
  fullMovieList: [],
  movieList: [],
  genres: ["All"],
  filterCategoryName: '',
  searchKeyword: '',
  sortValue: 'RELEASE DATE'
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
      return { ...state, fullMovieList, movieList: sort([...fullMovieList], 'releasedDate'), genres: [...state.genres, ...genres] };

    case ADD_MOVIE:
      return { ...state, fullMovieList: [...state.fullMovieList, action.payload], movieList: [...state.movieList, action.payload] }

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
    case SORT_MOVIE: {
      const newSortValue= action.payload;
      const movieList = [...state.movieList];
      const sortedMovieList = sort(movieList, newSortValue);
      return { ...state,sortValue: newSortValue, movieList: sortedMovieList }
    }

    case FILTER_CATEGORY_BY_NAME: {
      const filterCategoryName = action.payload === 'ALL' ? '' : action.payload;
      const movieList = state.fullMovieList.filter(movie => movie.genre.toLowerCase().includes(filterCategoryName.toLowerCase()));
      return { ...state, filterCategoryName, movieList };
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


