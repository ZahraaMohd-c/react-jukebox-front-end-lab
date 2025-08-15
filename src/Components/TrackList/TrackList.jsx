import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { index } from '../../Services/trackServices'
import DeleteTrackBtn from './DeleteTrackBtn'

const TrackList = (props) => {

    const getAllTracks = async () => {
        const response = await index()
        props.setTracks(response.data)
    }

    useEffect(() => {
        getAllTracks()
    }, [])

    return (
        <>
            <h1>Track List</h1>
            <ul>
                {
                    props.tracks.length
                        ?
                        props.tracks.map(track => (
                            <li key={track._id}>
                                <p>{track.title}</p>
                                <p>{track.artist}</p>

                                <button onClick={() => {
                                    if(!props.isPlaying){
                                        props.setIsPlaying(track)

                                    }else{
                                        props.setIsPlaying(null)
                                    }

                                }}>Play</button>
                                <button onClick={() => {
                                    props.handleFormShown(track)
                                    props.handleSelect(track)
                                }}>
                                    Edit
                                </button>
                                <DeleteTrackBtn
                                    trackId={track._id}
                                    getAllTracks={getAllTracks}
                                />
                            </li>

                        ))
                        :
                        <p>louding...</p>
                }
            </ul>

        </>
    )
}

export default TrackList
