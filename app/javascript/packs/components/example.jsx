import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function tick(){
  const element =(
  <div>
    <h1> Hello World !!</h1>
    <h2> {new Date().toLocaleTimeString()} </h2>
  </div>
  );

  ReactDOM.render(element, document.getElementById('date'));

}


setInterval(tick,1000);
