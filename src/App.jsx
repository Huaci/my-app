import React, { Component } from 'react'
import Hello from 'components/Hello'
import Home from 'components/Home'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import logo from './assets/logo.svg'
import './App.css'

import Counter from 'components/Counter'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo shake-rotate' alt='logo' />
        </div>
        <Counter />
        <Hello msg='Hello World' />
        <Home />
        <Router>
          {renderRoutes(routes)}
        </Router>
      </div>
    )
  }
}
