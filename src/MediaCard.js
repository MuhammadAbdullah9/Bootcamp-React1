import React from 'react';
import './App.css';
import Gate from './gate';

function MediaCard(props) {
  return (
    <div>
      <hr id="short" />
      <h2>{props.title}</h2>
      <p className="bold">{props.body}</p>
      <img src={props.imageUrl} />
<small><p>The other two are text while image not, we can return them at once but then text would be showing at image place</p></small>
<hr id="short" />
<Gate />
    </div>

  )
}

export default MediaCard;

