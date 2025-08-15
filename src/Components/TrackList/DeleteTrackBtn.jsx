import React from 'react'
import { deleteTrack } from '../../Services/trackServices'

const DeleteTrackBtn = ({ getAllTracks ,trackId}) => {

        const handleDelete = async () => {
            await deleteTrack(trackId)
            getAllTracks()

        }


    return (
        <button onClick={handleDelete}>delete</button>
    )
}

export default DeleteTrackBtn
