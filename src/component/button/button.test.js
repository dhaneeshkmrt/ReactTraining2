import React from 'react';
import ReactDom from 'react-dom';
import MyButton from './button';
import renderer from 'react-test-renderer';

describe('App Component:', () => {

  it('render app component', () => {
    const div = document.createElement('div');
    ReactDom.render(<MyButton />, div);
  });

  it('render my button correctly', () => {
    const myButton = renderer.create(<MyButton />);
    const btnJson = myButton.toJSON();
    expect(btnJson).toMatchSnapshot();
  })
});