import { useEffect, useState } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Jai Ho Slumdog Millionaire",
      artist: "A.R.Rahman",
      image: "./images/song-1.jpg",
      src: "./music/Jai Ho.mp3"
    },
    {
      title: "Chogada",
      artist: "Darshan Raval, Asees Kaur",
      image: "./images/song-2.jpg",
      src: "./music/Chogada.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex])


  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
