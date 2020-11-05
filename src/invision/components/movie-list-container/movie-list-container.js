import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import SearchBar from '../search-bar/search-bar';
import MovieDetail from '../movie-detail/movie-detail';
import NoMoviesFound from '../no-movies-found/no-movies-found';
import NotFound from '../404/not-found';
import MovieList from '../movie-list/movie-list';
import './movie-list-container.scss';

import { FILTER_CATEGORY_BY_NAME, SORT_MOVIE } from '../../store/actions/action.types';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { createBrowserHistory } from "history";

function MovieListContainer(props) {

  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const genres = useSelector(state => state.movies.genres);
  const [sortValue, updateSortValue] = useState('RELEASE DATE');

  const filterCategory = (categoryName = '') => {
    history.push('/category/' + categoryName);
    dispatch({ type: FILTER_CATEGORY_BY_NAME, payload: categoryName })
  }


  const sort = (newSortValue) => {
    dispatch({ type: SORT_MOVIE, payload: newSortValue });
    updateSortValue(newSortValue);
  }

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path={["/category/:categoryName", "/search/:keyword", "/"]}>
            <SearchBar />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <section className="movie-list-section">
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
                  <option value="rating">rating</option>
                </select>
              </div>
            </div>
            <Switch>
              <Route exact path="/">
                <NoMoviesFound />
              </Route>
              <Route path="/category/:categoryName">
                <MovieList />
              </Route>
              <Route exact path="*">
                <MovieList />
              </Route>
            </Switch>
          </div>
        </section >
      </Router>
    </>
  );

}

export default MovieListContainer;