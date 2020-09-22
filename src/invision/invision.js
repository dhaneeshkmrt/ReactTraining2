import React from 'react';

import Header from './components/header/header';
import MovieList from './components/movie-list/movie-list'
import Footer from './components/footer/footer';
import ErrorBoundary from './components/error-boundary/error-boundary';
import MovieDetail from './components/movie-detail/movie-detail';
import MovieService from './services/movie.service';

export default class Invision extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {

    return (
      <ErrorBoundary>
        <Header />
        <MovieList />
        <Footer />
      </ErrorBoundary>
    );
  }
}