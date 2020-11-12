import React from 'react';

import MovieListContainer from './components/movie-list-container/movie-list-container'
import Footer from './components/footer/footer';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { Provider } from "react-redux";
import { store } from "./store";
import { hot } from 'react-hot-loader';

const Invision = ({ Router, location, context }) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router location={location} context={context}>
          <MovieListContainer />
        </Router>
        <Footer />
      </Provider>
    </ErrorBoundary>
  );
}

export default hot(module)(Invision);