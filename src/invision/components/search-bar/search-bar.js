import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams, Link } from "react-router-dom";

import MoviePopup from "../movie-popup/movie.popup";
import { searchMovieAction } from '../../store/actions/search-movie.action';
import { addMovieAction } from '../../store/actions/add-movie.action';
import './search-bar.scss';

export default function SearchBar(props) {
  const [addMoviePopupVisibility, updateAddMoviePopupVisibility] = useState(false);
  const [searchKeyword, updateSearchKeyword] = useState('');
  const sortValue = useSelector(state => state.movies.sortValue)
  const history = useHistory();
  const dispatch = useDispatch();
  const { keyword } = useParams();
  useEffect(() => {
    console.log('keyword: ', keyword);
    if (keyword) {
      dispatch(searchMovieAction(keyword, sortValue))
      updateSearchKeyword(keyword);
    }
  }, []);

  const showAddMoviePopup = () => {
    updateAddMoviePopupVisibility(true);
  }

  const onMoviePopupClose = ({ visible, isAdd, updatedMovie }) => {
    updateAddMoviePopupVisibility(visible);
    if (isAdd) {
      dispatch(addMovieAction(updatedMovie));
      return;
    }
  }

  const handleSearchClick = (searchString) => {
    if (searchString) {
      dispatch(searchMovieAction(searchString, sortValue));
      history.push('/search/' + searchString);
    }
  }

  return (
    <header className="header">
      <section className="top">
        <div className="logo"><Link to="/">Netflix routlettee</Link></div>
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
            <button onClick={() => handleSearchClick(searchKeyword)} >SEARCH</button>
          </div>
        </div>
      </section>
      { addMoviePopupVisibility ? <MoviePopup onModalClose={onMoviePopupClose} title="Add Movie" /> : null}
    </header>
  );
}