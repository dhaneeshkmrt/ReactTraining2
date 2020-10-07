import { GET_FULL_MOVIE_LIST } from "./action.types";
import {movieMapper} from '../../utils/movie-mapper.util';

export const getFullMovieList = () => {
  return dispatch => {
    fetch(`http://localhost:4000/movies`)
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