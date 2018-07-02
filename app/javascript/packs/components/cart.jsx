import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Cart from "../cart"

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Cart/>,
    document.getElementById('this-is-react-region'),
  )
})
