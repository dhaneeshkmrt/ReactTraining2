import React from 'react';
import thumbnail from './thumbnail.png';
import MovieItem from '../movie-item/movie-item'
import './movie-list.scss';
import MovieService from '../../services/movie.service';

export default class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      sortValue: 'RELEASE DATE',
    };

    this.getMovieList();

    this.sort = this.sort.bind(this);
  }

  getMovieList() {
    new MovieService().getMovieList().then(movieList => {
      this.setState({ movieList });
    });
  }

  sort(ev) {
    this.setState({ sortValue: ev.target.value });
    let sortType = 'genre';
    let sortFn = this.stringComparison;
    if (ev.target.value === 'RELEASE DATE') {
      sortType = 'releasedDate';
      sortFn = this.numberComparison;
    }
    const sortedMovieList = this.state.movieList.sort((movie1, movie2) => {
      return sortFn(movie1[sortType], movie2[sortType]);
    });

    this.setState({ movieList: sortedMovieList });

  }
  stringComparison(b, a) {
    return a.localeCompare(b);
  }

  numberComparison(b, a) {
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    return 0;
  }


  render() {
    return (
      <section className="movie-list-section">
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
            <select onChange={this.sort} value={this.state.sortValue}>
                <option value="RELEASE DATE">RELEASE DATE</option>
                <option value="CATEGORY">CATEGORY</option>
              </select>
            </div>
          </div>
          <div className="movie-list">
            <div className="list-count">
              {this.state.movieList.length} movies Found
          </div>
            <div className="items">
              {
                this.state.movieList.map((movie, i) => {
                  return <MovieItem key={i} movie={movie} />
                })
              }
            </div>
          </div>
        </div>
      </section >
    );
  }
}