import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Invision from './invision/invision';
import { store } from './invision/store';
import { searchMovieAction } from './invision/store/actions/search-movie.action';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link href="/css/main.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/js/main.js"></script>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>

        </body>
      </html>
  `;
}

export default  function serverRenderer() {
  const context = React.createContext();

  return async (req, res) => {
    const renderedRoot = () => (<Invision
      context={context}
      location={req.url}
      Router={StaticRouter}
      store={store}
    />);
    renderToString(renderedRoot());
    if(req.url.startsWith('/search')){
      const searchKeyword = req.url.split('/')[2];
      if(searchKeyword){
        await store.dispatch(searchMovieAction(searchKeyword));
      }
    }else if(req.url.startsWith('/category')){
      const category = req.url.split('/')[2];
      if(category){
        store.dispatch({action: FILTER_CATEGORY_BY_NAME, payload: 'category'});
      }
    }

    const htmlString = renderToString(renderedRoot());
    setTimeout(() => {
      const preloadedState = store.getState();
      res.send(renderHTML(htmlString, preloadedState));
    }, 3000);
  };
}
