import React, { useState, useCallback } from 'react';

import MoviePopup from '../movie-popup/movie.popup';
import DeletePopup from '../delete-movie/delete-popup';

import MovieItem from '../movie-item/movie-item'
import SearchBar from '../search-bar/search-bar';
import './movie-list.scss';

import MovieService from '../../services/movie.service';
import useFetchMovie from './fetch-movie.hook';


export default function MovieList() {

  const [movieList, updateMovieList] = useState([]);
  const [sortValue, updateSortValue] = useState('RELEASE DATE');
  const [isEditMovieVisible, updateMoviePopupVisibility] = useState(false);
  const [isDeleteMovieVisible, updateDeleteMoviePopupVisibility] = useState(false);
  const [selectedMovie, updateSelectedMovie] = useState(null);

  useFetchMovie(() => {
    new MovieService().getMovieList().then(newMovieList => {
      updateMovieList(newMovieList);
    });
  })

  function sort(newSortValue) {
    updateSortValue(newSortValue);
    let sortType = 'genre';
    let sortFn = stringComparison;
    if (newSortValue === 'RELEASE DATE') {
      sortType = 'releasedDate';
    }
    const sortedMovieList = movieList.sort((movie1, movie2) => {
      return sortFn(movie1[sortType], movie2[sortType]);
    });

    updateMovieList(sortedMovieList);

    function stringComparison(b, a) {
      return a.localeCompare(b);
    }

    function numberComparison(b, a) {
      if (a < b)
        return -1;
      if (a > b)
        return 1;
      return 0;
    }

  }

  const onMoviePopupClose = ({ visible, isAdd, updatedMovie }) => {
    updateMoviePopupVisibility(visible);

    if (isAdd) {
      
      updateMovieList([...movieList, updatedMovie]);
      return;
    }

    if (updatedMovie) {
      const index = movieList.findIndex(movie => movie.id === updatedMovie.id);
      if (index !== -1) {
        movieList[index] = { ...updatedMovie };
      }
    }

  }

  const onDeletePopupClose = ({ isDelete, deletedMovie }) => {
    if (isDelete) {
      const index = movieList.findIndex(movie => movie.id === deletedMovie.id);
      if (index !== -1) {
        movieList.splice(index, 1);
      }
    }
    updateDeleteMoviePopupVisibility(false);
  }

  const findMovie = useCallback((id) => {
    return movieList.find(movie => movie.id === id);
  })

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

  const showEditMoviePopup = () => {
    if (isEditMovieVisible) {
      return <MoviePopup visible="true" title="Edit Movie" movie={selectedMovie} onModalClose={onMoviePopupClose} />
    }
  }

  const showDeleteMoviePopup = () => {
    if (isDeleteMovieVisible) {
      return <DeletePopup visible="true" title="Delete Movie" movie={selectedMovie} onDeletePopupClose={onDeletePopupClose} />
    }
  }

  return (
    <>
      <SearchBar onModalClose={onMoviePopupClose} />
      <section className="movie-list-section">
        {showEditMoviePopup()}
        {showDeleteMoviePopup()}
        <div className="movie-list-ctnr">
          <div className="header">
            <div className="categories">
              <div className="category">All</div>
              <div className="category">DOCUMENTARY</div>
              <div className="category">COMEDY</div>
              <div className="category">HORROR</div>
              <div className="category">CRIME</div>
            </div>
            <div className="sort">
              SORT BY
            <select onChange={(ev) => { sort(ev.target.value) }} value={sortValue}>
                <option value="RELEASE DATE">RELEASE DATE</option>
                <option value="CATEGORY">CATEGORY</option>
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
                  return <MovieItem key={movie.id} movie={movie} showEditPopup={showEditPopup} showDeletePopup={showDeletePopup} />
                })
              }
            </div>
          </div>
        </div>
      </section >
    </>
  );

}