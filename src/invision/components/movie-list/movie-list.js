import React from 'react';

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
                array.map(() => {
                  return (
                    <div className="item">
                      <div className="thumbnail">
                        <img src={"./thumbnail.png"} alt="film-thumbnail" />
                      </div>
                      <div className="desc">
                        <div className="name">
                          Pulp Fiction
                            <div className="type">Action & adventure</div>
                        </div>
                        <div className="year">
                          <span>2004</span></div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section >
    );
  }
}