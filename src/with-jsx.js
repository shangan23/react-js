import React from 'react';
import ReactDOM from 'react-dom';

//JSX Way
ReactDOM.render(
  <div className="hellotext" id="helloworld">
    <p id="inner" style={{ color: 'blue' }}>
      Hello World with JSX
    </p>
  </div>,
  document.getElementById('root')
);