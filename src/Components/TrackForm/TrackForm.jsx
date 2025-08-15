import { useState } from "react"
import { create, index, update } from "../../Services/trackServices"

const TrackForm = ({ setIsFormShown, setTracks, isSelected }) => {

    const intialState = {
        title: '',
        artist: ''

    }
    const [formData, setFormData] = useState(
        isSelected ? isSelected : intialState
    )

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let response = null
        if (isSelected) {
            response = await update(formData, isSelected._id)

        } else {
            response = await create(formData)
        }
        if (response.status === 201 || response.status === 200) {

            setIsFormShown(false)
        }
        response = await index()
        setTracks(response.data)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">track Title: </label>
                <input
                    id='title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />

                <label htmlFor="artist">Track Artist:</label>
                <input
                    id='artist'
                    name='artist'
                    value={formData.artist}
                    onChange={handleChange}
                />

                <button type="submit">
                    {isSelected ? 'Update' : 'Create'}
                </button>
            </form>
        </>

    )

}

export default TrackForm