import React, { useState, useCallback, useMemo } from 'react';

import MoviePopup from '../movie-popup/movie.popup';
import DeletePopup from '../delete-movie/delete-popup';

import MovieItem from '../movie-item/movie-item'
import SearchBar from '../search-bar/search-bar';
import MovieDetail from '../movie-detail/movie-detail';
import './movie-list.scss';

import MovieService from '../../services/movie.service';
import useFetchMovie from './fetch-movie.hook';


export default function MovieList() {

  const [movieList, updateMovieList] = useState([]);
  const [fullMovieList, updateFullMovieList] = useState([]);
  const [sortValue, updateSortValue] = useState('RELEASE DATE');
  const [isEditMovieVisible, updateMoviePopupVisibility] = useState(false);
  const [isDeleteMovieVisible, updateDeleteMoviePopupVisibility] = useState(false);
  const [selectedMovie, updateSelectedMovie] = useState(null);
  const [detailedMovie, updateDetailedMovie] = useState(null);

  useFetchMovie(() => {
    new MovieService().getMovieList().then(newMovieList => {
      updateMovieList(newMovieList);
      updateFullMovieList(newMovieList);
    });
  });

  const onHandleSearchClick = (searchKeyword) => {
    const searchedMovies = fullMovieList.filter(movie => movie.title.toLowerCase().includes(searchKeyword.toLowerCase()));
    updateMovieList(searchedMovies);
  }

  const filterCategory = useCallback((categoryName = '') => {
    const searchedMovies = fullMovieList.filter(movie => movie.genre.toLowerCase().includes(categoryName.toLowerCase()));
    updateMovieList(searchedMovies);
  }, [fullMovieList]);


  const sort = (newSortValue) => {
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

  const showMovieDetail = (movie) => {
    updateDetailedMovie(movie);
  }
  const showSearchBar = () => {
    updateDetailedMovie(null);
  }


  const onMoviePopupClose = ({ visible, isAdd, updatedMovie }) => {
    updateMoviePopupVisibility(visible);

    if (isAdd) {
      updatedMovie.id = Math.max(...fullMovieList.map(movie => movie.id)) + 1 || 1;
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
              <div className="category" onClick={() => filterCategory('')}>All</div>
              <div className="category" onClick={() => filterCategory('DOCUMENTARY')}>DOCUMENTARY</div>
              <div className="category" onClick={() => filterCategory('COMEDY')}>COMEDY</div>
              <div className="category" onClick={() => filterCategory('HORROR')}>HORROR</div>
              <div className="category" onClick={() => filterCategory('CRIME')}>CRIME</div>
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