import React from 'react';
import ReactDom from 'react-dom';
import './app.scss';
import Invision from './invision/invision';
import { hydrate } from 'react-dom';


const App = (
    <Invision />
  )

hydrate(App, document.getElementById('root'));