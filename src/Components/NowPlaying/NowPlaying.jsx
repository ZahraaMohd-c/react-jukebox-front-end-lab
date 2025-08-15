import React from 'react'

const NowPlaying = ({tracks,isPlaying}) => {

    const playingTrack = tracks.find( track => (
        track._id === isPlaying._id
    ))
  return (
    <>
    <h3>Now Playing</h3>
    <p>Title:{playingTrack.title}</p>
    <p>Artist: {playingTrack.artist}</p>
    </>
  )
}

export default NowPlaying
