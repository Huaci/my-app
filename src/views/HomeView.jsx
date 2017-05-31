import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'
export default class HomeView extends Component {
  render () {
    return (
      <p>
        <Link to='/about'>About</Link>
      </p>
    )
  }
}
