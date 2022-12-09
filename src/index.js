import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './mapbox/src/registerServiceWorker'
import './mapbox/src/index.css'
import App2 from './mapbox/src/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

injectTapEventPlugin();

ReactDOM.render(<App2 />, document.getElementById('root'));
registerServiceWorker();

