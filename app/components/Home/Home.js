import React, { PropTypes } from 'react'

import { container, title, slogan } from './styles.css'

const Home = (props) => {
  return (
    <div className={container}>
      <p className={title}>{'Duckr'}</p>
      <p className={slogan}>{'The real time, cloud based, modular, scalable, growth hack, social platform in the cloud'}</p>
    </div>
  )
}

export default Home
