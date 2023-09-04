import React from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

function Player({ song, nextSong}) {
  return (
    <div className='player'>
        <audio></audio>
        <h4>Playing now</h4>
        <PlayerDetails song={song} />
        <PlayerControls />
        <p><strong>Next up:</strong>{nextSong.title} by {nextSong.artist}</p>
    </div>
  )
}

export default Player