import React from 'react'
import PropTypes from 'prop-types'
import './Home.scss'
const Home = () => (
  <div id='Home'>
    <p className='title'>home</p>
  </div>
)

Home.prototype.propTypes = {
  msg: PropTypes.string
}

export default Home
