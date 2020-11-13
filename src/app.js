import React from 'react';
import {hydrate} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';
import Invision from './invision/invision';


const App = (
    <Invision Router={BrowserRouter} />
  )

hydrate(App, document.getElementById('root'));