import { DELETE_MOVIE } from "./action.types";
import { movieMapper } from '../../utils/movie-mapper.util';
import { movieConverter } from '../../utils/movie-converter.util';

export const deleteMovieAction = (id) => {
  return dispatch => {
    fetch(`http://localhost:4000/movies/${id}`, {
      method: 'DELETE', headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        dispatch({
          type: DELETE_MOVIE,
          payload: id
        });
      }).catch(err=>{

      })
  };
};