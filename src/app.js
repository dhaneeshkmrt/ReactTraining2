import React from 'react';
import ReactDom from 'react-dom';
import './app.scss';
import Invision from './invision/invision';

function App() {
  return (
    <Invision />
  )
}

ReactDom.render(<App />, document.getElementById('root'));