import TestRenderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from "../../store";
import NoMoviesFound from '../no-movies-found/no-movies-found';

describe('no-movies-found:', () => {
  test('should render', () => {
    const searchBar = TestRenderer.create(<Provider store={store}><NoMoviesFound /></Provider >);
    const json = searchBar.toJSON();
    expect(json).toMatchSnapshot();
  })
});