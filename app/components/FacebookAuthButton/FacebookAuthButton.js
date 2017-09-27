import React, { PropTypes } from 'react'

import { button } from './styles.css'

const FacebookAuthButton = ({onAuth, isFetching}) => {
  return (
    <button onClick={onAuth} className={button}>
      {isFetching === true
        ? 'Loading'
        : 'Login with facebook'}
    </button>
  )
}

FacebookAuthButton.propsTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default FacebookAuthButton
