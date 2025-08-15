import axios from "axios"
import { useEffect, useState } from "react"

import TrackForm from './Components/TrackForm/TrackForm'
import TrackList from "./Components/TrackList/TrackList"
import NowPlaying from "./Components/NowPlaying/NowPlaying"

const App = () => {

  const [tracks, setTracks] = useState([])
  const [isFormShown, setIsFormShown] = useState(false)
  const [isPlaying, setIsPlaying] = useState(null)
  const [isSelected, setIsSelected] = useState(null)

  const handleFormShown = (track) => {
    if (!track._id) {
      setIsSelected(null)
    }
    setIsFormShown(!isFormShown)
  }

  const handleSelect = (track) => {
    setIsSelected(track)
  }

  return (
    <>
      <button onClick={handleFormShown}>Add New Track</button>
      {
        isFormShown
          ?
          <TrackForm
            setIsFormShown={setIsFormShown}
            setTracks={setTracks}
            isSelected={isSelected}
          />
          :
          null

      }
      <TrackList
        tracks={tracks}
        setTracks={setTracks}
        isSelected={isSelected}
        handleFormShown={handleFormShown}
        handleSelect={handleSelect}
        setIsPlaying={setIsPlaying}
      />
      {
        isPlaying
          ?
          <NowPlaying
            tracks={tracks}
            isPlaying={isPlaying}
          />
          :
          null

      }

    </>
  )

}

export default App