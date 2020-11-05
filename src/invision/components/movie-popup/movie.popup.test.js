import { store } from "../../store";
import React from "react";
import { Provider } from 'react-redux';

import MoviePopup from "./movie.popup";
import TestRenderer from 'react-test-renderer';


describe('Movie Popup: ', () => {
  
  it('should render', ()=>{
    const searchBar = TestRenderer.create(<Provider store={store}><MoviePopup /></Provider >);
    const json = searchBar.toJSON();
    expect(json).toMatchSnapshot();
  })
});