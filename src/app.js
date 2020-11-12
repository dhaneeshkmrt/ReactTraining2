import React from 'react';
import ReactDom, {hydrate} from 'react-dom';
import './app.scss';
import Invision from './invision/invision';


const App = (
    <Invision />
  )

hydrate(App, document.getElementById('root'));