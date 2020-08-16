import React from 'react';

import Header from './components/header/header';
import MovieList from './components/movie-list/movie-list'
import Footer from './components/footer/footer';
import ErrorBoundary from './components/error-boundary/error-boundary';

export default class Invision extends React.Component {

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