import React from 'react';

import MovieList from './components/movie-list/movie-list'
import Footer from './components/footer/footer';
import ErrorBoundary from './components/error-boundary/error-boundary';

export default function Invision() {
  return (
    <ErrorBoundary>
      <MovieList />
      <Footer />
    </ErrorBoundary>
  );
}