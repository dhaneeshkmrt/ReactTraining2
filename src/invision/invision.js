import React from 'react';

import MovieList from './components/movie-list/movie-list'
import Footer from './components/footer/footer';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { Provider } from "react-redux";
import { store } from "./store";

export default function Invision() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <MovieList />
        <Footer />
      </Provider>
    </ErrorBoundary>
  );
}