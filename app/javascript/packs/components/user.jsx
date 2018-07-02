import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
function formatName(){
  return user.firstName + " " + user.lastName

}
function getGreetings(user){
  if(user){
    return "Hello! {formatName(user)}"
  }
  return "Hello! Stranger"

}
 const user = {
  firstName: "Vi",
  lastName: "Tran",

 }

 const element = (
  <h1> Hello! My name's {user.firstName}</h1>);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    element,
    document.getElementById('root'),
  )
})


// const element = <img src={user.avatarUrl}></img>;
