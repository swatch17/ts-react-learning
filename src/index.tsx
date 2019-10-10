import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import AppRouter from './router/AppRouter'
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <AppRouter />
  </div>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
