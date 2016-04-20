// Import modules
import React from 'react';
import ReactDOM from 'react-dom';

// React Component. This should produce some HTML
const App = function(){
  return <div>Hi there!</div>;
}

// Render the component into the DOM
ReactDOM.render(<App />, document.getElementById('container'));