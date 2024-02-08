import React from 'react';
import ReactDOMClient from 'react-dom/client';
// import { render } from 'react-dom';
import App from './App';
import components from './components';

const Component = components[window.initState.componentName];

ReactDOMClient.hydrateRoot(
  document.getElementById('root'),
  <App {...window.initState}>
    <Component {...window.initState} />
  </App>,
);

delete window.initState;

// render(<App />, document.getElementById('root'));
