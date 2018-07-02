import React, { Component } from 'react'
class Square extends React.Component{
  render(){
    return(
      <button className="square" onClick={function() { alert('click'); }}>
        {this.props.value} Click me
      </button>
    );
  }
}

export default Square
