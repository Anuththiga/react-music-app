import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

function PlayerControls({isPlaying, setIsPlaying, moveSongForward, moveSongBackward}) {
  return (
    <div className='player-controls'>
        <button className='move-btn' onClick={moveSongBackward}>
            <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className='play-btn' onClick={()=> setIsPlaying(!isPlaying)}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button className='move-btn' onClick={moveSongForward}>
            <FontAwesomeIcon icon={faForward} />
        </button>
    </div>
  )
}

export default PlayerControls