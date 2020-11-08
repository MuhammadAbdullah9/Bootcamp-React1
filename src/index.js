import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import image from "./img/logoR.png"
import App from './App';
import MediaCard from "./MediaCard"


ReactDOM.render(
    <div className="main">
      <App />
    <MediaCard title="Media Card Work" body="The bold body of MediaCard" imageUrl={image} />
    </div>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

