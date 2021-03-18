import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyContext } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <MyContext >
      <App />
    </MyContext>      
  </React.StrictMode>,
  document.getElementById('root')
);
