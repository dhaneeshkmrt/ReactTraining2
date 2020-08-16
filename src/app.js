import React from 'react';
import ReactDom from 'react-dom';
import './app.scss';
import MyButton from './component/button/button';

function App(){
  return <h1>New React App - Task 2</h1>;
  <MyButton />
}

ReactDom.render(<App />, document.getElementById('root'));

