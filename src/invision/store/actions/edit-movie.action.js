import { EDIT_MOVIE } from "./action.types";
import { movieMapper } from '../../utils/movie-mapper.util';
import { movieConverter } from '../../utils/movie-converter.util';

export const editMovieAction = (movie) => {
  movie = movieConverter(movie);
  return dispatch => {
    fetch(`http://localhost:4000/movies`, {
      method: 'PUT', body: JSON.stringify(movie), headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(res => {
        const movie = movieMapper(res);
        dispatch({
          type: EDIT_MOVIE,
          payload: movie
        });
      })
  };
};