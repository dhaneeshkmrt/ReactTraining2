import React from 'react';
import MoviePopup from "../movie-popup/movie.popup";
import './header.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
    this.onModalClose = this.onModalClose.bind(this);
  }
  showAddMoviePopup() {
    this.setState({ visible: true });
  }

  onModalClose(visible) {
    this.setState({ visible });
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
        <MoviePopup visible={this.state.visible} onModalClose={this.onModalClose} title="Add Movie" />
      </header>
    );
  }
}