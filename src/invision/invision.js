import React from 'react';

import MovieListContainer from './components/movie-list-container/movie-list-container'
import Footer from './components/footer/footer';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { Provider } from "react-redux";
import { store } from "./store";

export default function Invision() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <MovieListContainer />
        <Footer />
      </Provider>
    </ErrorBoundary>
  );
}