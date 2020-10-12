import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import './movie-list.scss';
import MovieItem from '../movie-item/movie-item';
import MoviePopup from '../movie-popup/movie.popup';
import DeletePopup from '../delete-movie/delete-popup';

import { editMovieAction } from "../../store/actions/edit-movie.action";
import { deleteMovieAction } from "../../store/actions/delete-movie.action";
import { FILTER_CATEGORY_BY_NAME } from '../../store/actions/action.types';


const MovieList = (props) => {

  const [isEditMovieVisible, updateMoviePopupVisibility] = useState(false);
  const [isDeleteMovieVisible, updateDeleteMoviePopupVisibility] = useState(false);
  const [selectedMovie, updateSelectedMovie] = useState(null);
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  const movieList = useSelector(state => {
    return state.movies.movieList
  });

  // useEffect(() => {
  //   if (categoryName) {
  //     setTimeout(()=>{
  //       dispatch({ type: FILTER_CATEGORY_BY_NAME, payload: categoryName })
  //     })
  //   }
  // }, []);

  const showDeletePopup = (id) => {
    const selectedMovie = findMovie(id);
    updateSelectedMovie(selectedMovie);
    updateDeleteMoviePopupVisibility(true);
  }

  const showEditPopup = (id) => {
    const selectedMovie = findMovie(id);
    updateSelectedMovie(selectedMovie);
    updateMoviePopupVisibility(true);
  }

  const showMovieDetail = (movie) => {
    updateDetailedMovie(movie);
  }

  const onDeletePopupClose = ({ isDelete, deletedMovie }) => {
    if (isDelete) {
      dispatch(deleteMovieAction(deletedMovie.id));
    }
    updateDeleteMoviePopupVisibility(false);
  }

  const onMoviePopupClose = ({ visible, isAdd, updatedMovie }) => {
    updateMoviePopupVisibility(visible);

    if (isAdd) {
      dispatch(addMovieAction(updatedMovie));
      return;
    }

    if (updatedMovie) {
      dispatch(editMovieAction(updatedMovie));
    }
  }

  const findMovie = (id) => {
    return movieList.find(movie => movie.id === id);
  };

  // const history = createBrowserHistory();
  // if (movieList && movieList.length ===0) {
  //   history.push('/no-movies-found');
  // }

  return <>
    {isEditMovieVisible ? <MoviePopup visible="true" title="Edit Movie" movie={selectedMovie} onModalClose={onMoviePopupClose} /> : null}
    {isDeleteMovieVisible ? <DeletePopup visible="true" title="Delete Movie" movie={selectedMovie} onDeletePopupClose={onDeletePopupClose} /> : null}
    <div className="movie-list">
      <div className="list-count">
        {movieList.length} movies Found
      </div>
      <div className="items">
        {
          movieList.map((movie, i) => {
            return <MovieItem key={movie.id} movie={movie} showMovieDetail={showMovieDetail} showEditPopup={showEditPopup} showDeletePopup={showDeletePopup} />
          })
        }
      </div>
    </div>
  </>;
};

export default MovieList;