import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import * as serviceWorker from "./serviceWorker";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-250993129-2');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>

  </React.StrictMode>
);
// node --trace-deprecation ...
serviceWorker.unregister();
