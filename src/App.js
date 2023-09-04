import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Jai Ho Slumdog Millionaire",
      artist: "A.R.Rahman",
      image: "./images/song-1.jpg",
      src: "./music/Jai Ho.mp3"
    },
    {
      title: "Jai Ho Slumdog Millionaire",
      artist: "A.R.Rahman",
      image: "./images/song-1.jpg",
      src: "./music/Jai Ho.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player
        song = {songs[currentSongIndex]}
        nextSong = {songs[nextSongIndex]}
      />
    </div>
  );
}

export default App;
