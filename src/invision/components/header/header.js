import React from 'react';
import MoviePopup from "../add-movie/add-movie";
import './header.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.visible = false;
  }
  showAddMoviePopup() {
    this.visible = true
  }

  render() {
    return (
      <header className="header">
        <section className="top">
          <div className="logo">Netflix routlettee</div>
          <div className="add-movie">
            <button onClick={this.showAddMoviePopup.bind(this)}>+ ADD MOVIE</button>
          </div>
        </section>
        <section className="search-ctnr">
          <h2 className="title">FIND YOUR MOVIE</h2>
          <div className="search">
            <div className="input">
              <input type="search" />
            </div>
            <div className="search-btn">
              <button>SEARCH</button>
            </div>
          </div>
        </section>
        <MoviePopup visible={this.visible} title="Add Movie"/>
      </header>
    );
  }
}