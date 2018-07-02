
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Square from "../square"

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Square/>,
    document.getElementById('square'),
  )
})
