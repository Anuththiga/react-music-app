import React, { useEffect, useRef, useState } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

function Player({ songs, nextSongIndex, setCurrentSongIndex, currentSongIndex}) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if(isPlaying) audioElement.current.play();
    else audioElement.current.pause();
  })

  const moveSongForward = () => {
    setCurrentSongIndex(() => {
      let temp = currentSongIndex;
      temp++;

      if(temp > songs.length - 1) temp = 0
      return temp;
    })
  }

  const moveSongBackward = () => {
    setCurrentSongIndex(() => {
      let temp = currentSongIndex;
      temp--;

      if(temp < 0) temp = songs.length -1;
      return temp;
    })
  }
  return (
    <div className='player'>
        <audio src={songs[currentSongIndex].src} ref={audioElement}></audio>
        <h4>Playing now</h4>
        <PlayerDetails song={songs[currentSongIndex]} />
        <PlayerControls 
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          moveSongForward={moveSongForward}
          moveSongBackward={moveSongBackward}
        />
        <p><strong>Next up:</strong>{songs[nextSongIndex].title} by {songs[nextSongIndex].artist}</p>
    </div>
  )
}

export default Player