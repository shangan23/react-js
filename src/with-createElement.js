import React from 'react';
import ReactDOM from 'react-dom';

// some basic checks
console.log('React Version', React.version);
console.log('React Constructor', React.constructor);
console.log('React __proto__', React.__proto__);
console.log('ReactDOM Version', ReactDOM.version);

//with createElement
ReactDOM.render(
  React.createElement(
    'div',
    { className: 'hellotext', id: 'helloworld' },
    React.createElement(
      'p',
      { id: 'inner', style: { color: 'blue', border: '1px solid #f6f6f6' } },
      'Hello World Without JSX Nested'
    )
  ),
  document.getElementById('root')
);