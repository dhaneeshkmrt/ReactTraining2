import React, { useState } from 'react';

import MoviePopup from "../movie-popup/movie.popup";
import './search-bar.scss';

export default function SearchBar(props) {
  const [addMoviePopupVisibility, updateAddMoviePopupVisibility] = useState(false);
  const [searchKeyword, updateSearchKeyword] = useState('');

  const defaultMovie = {
    genre: undefined,
    id: undefined,
    movieUrl: undefined,
    overview: undefined,
    rating: undefined,
    releasedDate: undefined,
    runTime: undefined,
    thumbnail: undefined,
    title: undefined
  }

  const showAddMoviePopup = () => {
    updateAddMoviePopupVisibility(true);
  }

  const onModalClose = (addMovieData) => {
    updateAddMoviePopupVisibility(addMovieData.visible);
    if (addMovieData.isSubmit) {
      props.onModalClose(addMovieData);
    }
  }

  return (
    <header className="header">
      <section className="top">
        <div className="logo">Netflix routlettee</div>
        <div className="add-movie">
          <button onClick={() => showAddMoviePopup()}>+ ADD MOVIE</button>
        </div>
      </section>
      <section className="search-ctnr">
        <h2 className="title">FIND YOUR MOVIE</h2>
        <div className="search">
          <div className="input">
            <input type="search" value={searchKeyword} onChange={(ev) => { updateSearchKeyword(ev.target.value) }} />
          </div>
          <div className="search-btn">
            <button onClick={() => props.handleSearchClick(searchKeyword)} >SEARCH</button>
          </div>
        </div>
      </section>
      <MoviePopup visible={addMoviePopupVisibility} onModalClose={onModalClose} movie={defaultMovie} title="Add Movie" />
    </header>
  );
}