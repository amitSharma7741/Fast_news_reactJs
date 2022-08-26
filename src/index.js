import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';
 
import Favicon from 'react-favicon'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Favicon url='http://oflisback.github.io/react-favicon/img/github.ico' />
    <App />
    </Router>
  
  </React.StrictMode>
); 
// node --trace-deprecation ...
 
