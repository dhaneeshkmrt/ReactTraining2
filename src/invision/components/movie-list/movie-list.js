import React, { useState, useCallback } from 'react';
import thumbnail from './thumbnail.png';
import MovieItem from '../movie-item/movie-item'
import './movie-list.scss';
import MovieService from '../../services/movie.service';

import MoviePopup from '../movie-popup/movie.popup';
import DeletePopup from '../delete-movie/delete-popup';
import useFetchMovie from './fetch-movie.hook';

export default function MovieList() {

  const [movieState, updateMovieState] = useState({
    movieList: [],
    sortValue: 'RELEASE DATE',
    isEditMovieVisible: false,
    isDeleteMovieVisible: false,
    selectedMovie: null
  })

  useFetchMovie(() => {
    new MovieService().getMovieList().then(movieList => {
      updateMovieState({ ...movieState, movieList });
    });
  })

  function sort(sortValue) {
    let sortType = 'genre';
    let sortFn = stringComparison;
    if (sortValue === 'RELEASE DATE') {
      sortType = 'releasedDate';
      sortFn = numberComparison;
    }
    const sortedMovieList = movieState.movieList.sort((movie1, movie2) => {
      return sortFn(movie1[sortType], movie2[sortType]);
    });

    updateMovieState({ ...movieState, movieList: sortedMovieList, sortValue });

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

  const onModalClose = (visible) => {
    updateMovieState({ ...movieState, isEditMovieVisible: visible })
  }

  const onDeletePopupClose = (isDelete) => {
    if (isDelete) {
      // delete move code
    } else {
      updateMovieState({ ...movieState, isDeleteMovieVisible: false });
    }
  }

  const findMovie = useCallback((id) => {
    return movieState.movieList.find(movie => movie.id === id);
  })



  const showEditPopup = (id) => {
    const selectedMovie = findMovie(id);
    updateMovieState({ ...movieState, isEditMovieVisible: true, selectedMovie })
  }

  const showDeletePopup = (id) => {
    const selectedMovie = findMovie(id);
    updateMovieState({ ...movieState, isDeleteMovieVisible: true, selectedMovie })
  }


  return (
    <section className="movie-list-section">
      <MoviePopup visible={movieState.isEditMovieVisible} title="Edit Movie" movie={movieState.selectedMovie} onModalClose={onModalClose} />
      <DeletePopup visible={movieState.isDeleteMovieVisible} title="Delete Movie" movie={movieState.selectedMovie} onDeletePopupClose={onDeletePopupClose} />
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
            <select onChange={(ev) => { sort(ev.target.value) }} value={movieState.sortValue}>
              <option value="RELEASE DATE">RELEASE DATE</option>
              <option value="CATEGORY">CATEGORY</option>
            </select>
          </div>
        </div>
        <div className="movie-list">
          <div className="list-count">
            {movieState.movieList.length} movies Found
          </div>
          <div className="items">
            {
              movieState.movieList.map((movie, i) => {
                return <MovieItem key={movie.id} movie={movie} showEditPopup={showEditPopup} showDeletePopup={showDeletePopup} />
              })
            }
          </div>
        </div>
      </div>
    </section >
  );

}