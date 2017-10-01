import React, { PropTypes } from 'react'

import { newDuckContainer, header } from './styles.css'
import { errorMsg } from 'sharedStyles/styles.css'


function NewDuckAvailable ({handleClick}) {
  return (
    <div className={newDuckContainer} onClick={handleClick}>
      {'New Ducks Available'}
    </div>
  )
}

NewDuckAvailable.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

const Feed = ({duckIds, error, isFetching, newDucksAvailable, resetNewDucksAvailable}) => {
  console.log(duckIds);
  return isFetching === true
    ? <h1 className={header}>{'Fetching'}</h1>
    : <div>
        {newDucksAvailable ? <NewDuckAvailable handleClick={resetNewDucksAvailable} /> : null}
        {duckIds.length === 0
          ? <p className={header}>{'This is unfortunate.'}<br /> {'It appears there are no ducks yet 😞'}</p>
          : null}
        {duckIds.map((id) => (
          <p>Duck Id: {id}</p>
        ))}
        {error ? <p className={errorMsg}>{error}</p> : null}
      </div>
}

Feed.propTypes = {
  duckIds: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  newDucksAvailable: PropTypes.bool.isRequired,
  resetNewDucksAvailable: PropTypes.func.isRequired,
}

export default Feed
