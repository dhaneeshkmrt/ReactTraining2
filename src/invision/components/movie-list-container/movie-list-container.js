import React, { useState, useCallback, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'

import MoviePopup from '../movie-popup/movie.popup';
import DeletePopup from '../delete-movie/delete-popup';

import SearchBar from '../search-bar/search-bar';
import MovieDetail from '../movie-detail/movie-detail';
import NoMoviesFound from '../no-movies-found/no-movies-found';
import NotFound from '../404/not-found';
import MovieList from '../movie-list/movie-list';
import './movie-list-container.scss';

import { getFullMovieList } from "../../store/actions/get-full-movie-list.action";
import { addMovieAction } from "../../store/actions/add-movie.action";
import { editMovieAction } from "../../store/actions/edit-movie.action";
import { deleteMovieAction } from "../../store/actions/delete-movie.action";
import { FILTER_CATEGORY_BY_NAME, FILTER_CATEGORY_BY_SEARCH_KEYWORD, SORT_MOVIE } from '../../store/actions/action.types';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation, useParams, useRouteMatch, Redirect } from "react-router-dom"
import { createBrowserHistory } from "history";

function MovieListContainer(props) {

  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const genres = useSelector(state => state.movies.genres);
  const [sortValue, updateSortValue] = useState('RELEASE DATE');

  

  useEffect(() => {
    dispatch(getFullMovieList());
  }, []);


  const filterCategory = (categoryName = '') => {
    history.push('/category/' + categoryName);
    dispatch({ type: FILTER_CATEGORY_BY_NAME, payload: categoryName })
  }


  const sort = (newSortValue) => {
    dispatch({ type: SORT_MOVIE, payload: newSortValue });
    updateSortValue(newSortValue);
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
  return (
    <>
      <Router history={history}>
        <Switch>
          <Redirect exact from="/movie" to="/"  ></Redirect>
          <Redirect exact from="/category" to="/"  ></Redirect>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/no-movies-found">
            <SearchBar onModalClose={onMoviePopupClose} />
          </Route>
          <Route path="/category/:categoryName">
            <SearchBar onModalClose={onMoviePopupClose} />
          </Route>
          <Route path="/search/:keyword">
            <SearchBar onModalClose={onMoviePopupClose} />
          </Route>
          <Route exact path="/movie/no-movies-found">
            <NoMoviesFound />
          </Route>
          <Route exact path="/">
            <SearchBar onModalClose={onMoviePopupClose} />
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
              <Route exact path="/no-movies-found">
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