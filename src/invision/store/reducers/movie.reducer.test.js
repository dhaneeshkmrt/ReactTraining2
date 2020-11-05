import { movieMapper } from "../../utils/movie-mapper.util";
import { movieReducer } from "./movie.reducer";
import {
  GET_FULL_MOVIE_LIST, ADD_MOVIE, FILTER_CATEGORY_BY_NAME, FILTER_CATEGORY_BY_SEARCH_KEYWORD, EDIT_MOVIE, DELETE_MOVIE,
  SORT_MOVIE, GET_MOVIE
} from "../actions/action.types";

describe('Movie Reducer', () => {
  const initValue = {
    fullMovieList: [],
    movieList: [],
    movieDetail: null,
    genres: ["All"],
    filterCategoryName: '',
    searchKeyword: '',
    sortValue: 'releasedDate'
  };
  const movies = [movieMapper(
    {
      "id": 143,
      "title": "All Quiet on the Western Front",
      "tagline": "They left for war as boys never to return as men.",
      "vote_average": 7.6,
      "vote_count": 216,
      "release_date": "1930-04-29",
      "poster_path": "https://image.tmdb.org/t/p/w500/9gn5ce3B2vOpk9pOGeUjmFecIo5.jpg",
      "overview": "A young soldier faces profound disillusionment in the soul-destroying horror of World War I",
      "budget": 1250000,
      "revenue": 0,
      "genres": ["Drama"],
      "runtime": 133
    })
    , movieMapper( {
      "id": 138,
      "title": "Dracula",
      "tagline": "The story of the strangest passion the world has ever known!",
      "vote_average": 7.2,
      "vote_count": 329,
      "release_date": "1931-02-12",
      "poster_path": "https://image.tmdb.org/t/p/w500/hA9kQrIwDHJKl1pt8GpJdDnBzim.jpg",
      "overview": "The legend of vampire Count Dracula begins here with this original 1931 Dracula film from Bela Lugosi.",
      "budget": 355000,
      "revenue": 0,
      "genres": ["Horror"],
      "runtime": 72
    })]
  it('should return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(initValue);
  });

  it('should handle GET_FULL_MOVIE_LIST', () => {
    const state = movieReducer(initValue, { type:GET_FULL_MOVIE_LIST, payload: movies });
    expect(state.fullMovieList.length).toBe(2);
  });
  it('should handle GET_FULL_MOVIE_LIST', () => {
    const state = movieReducer(initValue, { type:GET_FULL_MOVIE_LIST, payload: movies });
    expect(state.fullMovieList.length).toBe(2);
  });
  it('should handle ADD_MOVIE', () => {
    const state1 = movieReducer(initValue, { type:GET_FULL_MOVIE_LIST, payload: movies });
    const state = movieReducer(state1, { type:ADD_MOVIE, payload: movies[0] });
    expect(state.fullMovieList.length).toBe(3);
  });
  it('should handle EDIT_MOVIE', () => {
    const state1 = movieReducer(initValue, { type:GET_FULL_MOVIE_LIST, payload: movies });
    movies[0].title="test";
    const state = movieReducer(state1, { type:EDIT_MOVIE, payload: movies[0] });
    console.log(state);
    expect(state.fullMovieList[0].title).toBe("test");
  });
  it('should handle GET_MOVIE', () => {
    const state1 = movieReducer(initValue, { type:GET_FULL_MOVIE_LIST, payload: movies });
    const state = movieReducer(state1, { type:GET_MOVIE, payload: 143 });
    expect(state.movieDetail.id).toBe(143);
  });
  it('should handle SORT_MOVIE', () => {
    const state1 = movieReducer(initValue, { type:GET_FULL_MOVIE_LIST, payload: movies });
    const state = movieReducer(state1, { type:SORT_MOVIE, payload: 'rating' });
    expect(state.movieList[0].id).toBe(143);
  });
  it('should handle FILTER_CATEGORY_BY_NAME', () => {
    const state1 = movieReducer(initValue, { type:GET_FULL_MOVIE_LIST, payload: movies });
    const state = movieReducer(state1, { type:FILTER_CATEGORY_BY_NAME, payload: 'Horror' });
    expect(state.movieList[0].id).toBe(138);
  });
  it('should handle FILTER_CATEGORY_BY_SEARCH_KEYWORD', () => {
    const state1 = movieReducer(initValue, { type:GET_FULL_MOVIE_LIST, payload: movies });
    const state = movieReducer(state1, { type:FILTER_CATEGORY_BY_SEARCH_KEYWORD, payload: 'All Quiet' });
    expect(state.searchKeyword).toBe('All Quiet');
  });
});