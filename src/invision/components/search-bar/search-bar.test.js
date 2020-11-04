import TestRenderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from "../../store";
import NoMoviesFound from '../no-movies-found/no-movies-found';
import SearchBar from './search-bar';

// describe('Search Bar:', () => {

//   test('should render', () => {
//     const searchBar = TestRenderer.create(<Provider store={store}><SearchBar /></Provider >);
//     const json = searchBar.toJSON();
//     console.log(json)
//     // expect(json.props.className).toBe('no-movies-found');
//   })

// });