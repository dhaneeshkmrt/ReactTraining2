import React, { useState, useCallback, useEffect } from 'react';
import { connect, useSelector } from 'react-redux'

import MoviePopup from '../movie-popup/movie.popup';
import DeletePopup from '../delete-movie/delete-popup';

import MovieItem from '../movie-item/movie-item'
import SearchBar from '../search-bar/search-bar';
import MovieDetail from '../movie-detail/movie-detail';
import './movie-list.scss';

import MovieService from '../../services/movie.service';
import useFetchMovie from './fetch-movie.hook';

import { getFullMovieList } from "../../store/actions/get-full-movie-list.action";
import { addMovieAction } from "../../store/actions/add-movie.action";
import { editMovieAction } from "../../store/actions/edit-movie.action";
import { deleteMovieAction } from "../../store/actions/delete-movie.action";
import { FILTER_CATEGORY_BY_NAME, FILTER_CATEGORY_BY_SEARCH_KEYWORD, SORT_MOVIE } from '../../store/actions/action.types';

function MovieList(props) {

  useEffect(() => {
    props.dispatch(getFullMovieList());
  }, []);

  const movieList = useSelector(state => {
    return state.movies.movieList
  });

  const genres = useSelector(state => state.movies.genres);
  // const filterBySearchKeyword = useSelector(state => state.movie.searchKeyword);

  // updateMovieList(fullMovieList);

  // if (filterCategoryName) {
  //   const filteredMovies = fullMovieList.filter(movie => movie.genre.toLowerCase().includes(filterCategoryName.toLowerCase()));
  //   updateMovieList(filteredMovies);
  // }

  // if (filterBySearchKeyword) {
  //   const searchedMovies = fullMovieList.filter(movie => movie.title.toLowerCase().includes(filterBySearchKeyword.toLowerCase()));
  //   updateMovieList(searchedMovies);
  // }

  const onHandleSearchClick = (searchKeyword) => {
    props.dispatch({ type: FILTER_CATEGORY_BY_SEARCH_KEYWORD, payload: searchKeyword })
    // const searchedMovies = fullMovieList.filter(movie => movie.title.toLowerCase().includes(searchKeyword.toLowerCase()));
    // updateMovieList(searchedMovies);
  }

  const filterCategory = (categoryName = '') => {
    props.dispatch({ type: FILTER_CATEGORY_BY_NAME, payload: categoryName })
  }

  const [sortValue, updateSortValue] = useState('RELEASE DATE');
  const [isEditMovieVisible, updateMoviePopupVisibility] = useState(false);
  const [isDeleteMovieVisible, updateDeleteMoviePopupVisibility] = useState(false);
  const [selectedMovie, updateSelectedMovie] = useState(null);
  const [detailedMovie, updateDetailedMovie] = useState(null);


  const sort = (newSortValue) => {
    props.dispatch({type: SORT_MOVIE, payload: newSortValue});
    updateSortValue(newSortValue);
  }

  const showMovieDetail = (movie) => {
    updateDetailedMovie(movie);
  }
  const showSearchBar = () => {
    updateDetailedMovie(null);
  }

  const onMoviePopupClose = ({ visible, isAdd, updatedMovie }) => {
    updateMoviePopupVisibility(visible);

    if (isAdd) {
      props.dispatch(addMovieAction(updatedMovie));
      return;
    }

    if (updatedMovie) {
      props.dispatch(editMovieAction(updatedMovie));
    }

  }

  const onDeletePopupClose = ({ isDelete, deletedMovie }) => {
    if (isDelete) {
      props.dispatch(deleteMovieAction(deletedMovie.id));
    }
    updateDeleteMoviePopupVisibility(false);
  }

  const findMovie = (id) => {
    return movieList.find(movie => movie.id === id);
  };

  const showEditPopup = (id) => {
    const selectedMovie = findMovie(id);
    updateSelectedMovie(selectedMovie);
    updateMoviePopupVisibility(true);
  }

  const showDeletePopup = (id) => {
    const selectedMovie = findMovie(id);
    updateSelectedMovie(selectedMovie);
    updateDeleteMoviePopupVisibility(true);
  }

  return (
    <>
      {
        detailedMovie ?
          <MovieDetail movie={detailedMovie} showSearchBar={showSearchBar}></MovieDetail>
          :
          <SearchBar onModalClose={onMoviePopupClose} handleSearchClick={onHandleSearchClick} />
      }
      <section className="movie-list-section">
        {isEditMovieVisible ? <MoviePopup visible="true" title="Edit Movie" movie={selectedMovie} onModalClose={onMoviePopupClose} /> : null}
        {isDeleteMovieVisible ? <DeletePopup visible="true" title="Delete Movie" movie={selectedMovie} onDeletePopupClose={onDeletePopupClose} /> : null}
        <div className="movie-list-ctnr">
          <div className="header">
            <div className="categories">
              {
                genres.map((genre, index) => {
                  return (<div className="category" key={index} onClick={() => filterCategory(genre.toUpperCase())}>{genre}</div>)
                })
              }
            </div>
            <div className="sort">
              SORT BY
            <select onChange={(ev) => { sort(ev.target.value) }} value={sortValue}>
                <option value="releasedDate">RELEASED DATE</option>
                <option value="genre">genre</option>
              </select>
            </div>
          </div>
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
        </div>
      </section >
    </>
  );

}

function mapToProps(store) {
  const { fullMovieList } = store.movies;
  return {
    fullMovieList
  }
}

export default connect(mapToProps)(MovieList);