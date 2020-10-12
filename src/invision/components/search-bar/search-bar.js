import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from "react-router-dom";


import MoviePopup from "../movie-popup/movie.popup";
import './search-bar.scss';
import { FILTER_CATEGORY_BY_SEARCH_KEYWORD } from '../../store/actions/action.types';


export default function SearchBar(props) {
  const [addMoviePopupVisibility, updateAddMoviePopupVisibility] = useState(false);
  const [searchKeyword, updateSearchKeyword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  
  const { keyword } = useParams();
  if(keyword){
    dispatch({ type: FILTER_CATEGORY_BY_SEARCH_KEYWORD, payload: keyword })
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

  const handleSearchClick = (searchString) => {
    if (searchString) {
      dispatch({ type: FILTER_CATEGORY_BY_SEARCH_KEYWORD, payload: searchKeyword })
      history.push('/search/' + searchString);
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
            <button onClick={() => handleSearchClick(searchKeyword)} >SEARCH</button>
          </div>
        </div>
      </section>
      { addMoviePopupVisibility ? <MoviePopup onModalClose={onModalClose} title="Add Movie" /> : null}
    </header>
  );
}