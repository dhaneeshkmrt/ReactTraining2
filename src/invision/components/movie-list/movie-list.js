import React from 'react';
import thumbnail from './thumbnail.png';
import MovieItem from '../movie-item/movie-item'
import './movie-list.scss';

export default class MovieList extends React.Component {
  render() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
            <select>
                <option>RELEASE DATE</option>
                <option>Category</option>
              </select>
            </div>
          </div>
          <div className="movie-list">
            <div className="list-count">
              39 movies Found
          </div>
            <div className="items">
              {
                array.map((a, i) => {
                  return <MovieItem key={i} name={'test'} year={1234} type='Action' thumbnail={thumbnail} />
                })
              }
            </div>
          </div>
        </div>
      </section >
    );
  }
}