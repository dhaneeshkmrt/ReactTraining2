import React from 'react';

import './header.scss';

export default class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <section className="top">
          <div className="logo">Netflixroutlettee</div>
          <div className="add-movie">
            <button>+ ADD MOVIE</button>
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
      </header>
    );
  }
}