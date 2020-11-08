import React from 'react';
import './App.css';


function App() {
  return (
    <div className="app">
      <strong> Hello Abdullah</strong>
      <br />
      <h1>Bootcamp 2020</h1>
      <p className="border">I would be one of the drops of the river; <br /> which is flowing to water Pakistan's future <br /><small>(In sha Allah)</small></p>
      <h4>Learning new technologies with some known basics</h4>
      <ul><u>Basics I know</u>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <hr className="light" />
      <p> <span className="black">I checked, what happens if we forget to close a tag...</span><br />they said: <span className="red"> failed to compile</span> </p>
      <hr className="light" />
      <h5>Time to solve JS expression</h5>
      <p>The sum of two number given i.e 5 and 10 is {10 + 5}</p>
      <br />
    </div>
  );
}

export default App;
