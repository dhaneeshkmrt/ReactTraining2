import { GET_FULL_MOVIE_LIST } from "./action.types";
import { movieMapper } from '../../utils/movie-mapper.util';

export const searchMovieAction = (searchKeyword) => {
  return dispatch => {
    fetch(`http://localhost:4000/movies?sortBy=release_date&sortOrder=asc&searchBy=title&search=` + searchKeyword)
      .then(res => res.json())
      .then(res => {
        const list = res.data;
        const fullMovieList = list.map(movie => {
          return movieMapper(movie);
        });
        dispatch({
          type: GET_FULL_MOVIE_LIST,
          payload: fullMovieList
        });
      })
  };
};

