import React from 'react'

function PlayerDetails({song}) {
  return (
    <div className='player-details'>
        <div className='img'>
            <img src={song.image} alt=''/>
        </div>
        <h3 className='title'>{song.title}</h3>
        <h4 className='artist'>{song.artist}</h4>
    </div>
  )
}

export default PlayerDetails