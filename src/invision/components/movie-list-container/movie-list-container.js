import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import SearchBar from '../search-bar/search-bar';
import MovieDetail from '../movie-detail/movie-detail';
import NoMoviesFound from '../no-movies-found/no-movies-found';
import NotFound from '../404/not-found';
import MovieList from '../movie-list/movie-list';
import './movie-list-container.scss';

import { FILTER_CATEGORY_BY_NAME, SORT_MOVIE } from '../../store/actions/action.types';
import { Route, Switch, Redirect, StaticRouter, useHistory } from "react-router-dom"
import { createBrowserHistory,  } from "history";

function MovieListContainer(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector(state => state.movies.genres);
  const [sortValue, updateSortValue] = useState('RELEASE DATE');
  const [currentCategory, updateCurrentCategory]= useState('');

  const filterCategory = (categoryName = '') => {
    history.push('/category/' + categoryName);
    dispatch({ type: FILTER_CATEGORY_BY_NAME, payload: categoryName })
  }

  const hightLight = (event) => {
    if(currentCategory){
      currentCategory.classList.remove('active')
    }
    updateCurrentCategory(event.target);
    event.target.classList.add('active');
  }

  const sort = (newSortValue) => {
    dispatch({ type: SORT_MOVIE, payload: newSortValue });
    updateSortValue(newSortValue);
  }

  return (
    <>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path={["/category/:categoryName", "/search/:keyword", "/"]}>
            <SearchBar />
          </Route>
          <Route path={["/movie", "/no-movie-found", "*"]}>
            <NotFound />
          </Route>
        </Switch>

        <section className="movie-list-section">
          <div className="movie-list-ctnr">
            <div className="header">
              <div className="categories">
                {
                  genres.map((genre, index) => {
                    return (<div className="category" key={index} onClick={(e) => { filterCategory(genre.toUpperCase()); hightLight(e) }}>{genre}</div>)
                  })
                }
              </div>
              <div className="sort">
                SORT BY
                <select onChange={(ev) => { sort(ev.target.value) }} value={sortValue}>
                  <option value="releasedDate">RELEASED DATE</option>
                  <option value="genre">genre</option>
                  <option value="rating">rating</option>
                </select>
              </div>
            </div>
            <Switch>
              <Route path={["/category/:categoryName", "/movie/:id", "/search/:keyword"]}>
                <MovieList />
              </Route>
              <Route exact path="/">
                <NoMoviesFound />
              </Route>
              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </section >
    </>
  );

}

export default MovieListContainer;