import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_URL

const create = async (data) => {
    try {
        const url = `${baseUrl}/tracks`
        const response = await axios.post(url, data)
        return response

    }
    catch (error) {
        return error
    }
}

const deleteTrack = async (id) => {
    try {
        const url = `${baseUrl}/tracks/${id}`
        const response = await axios.delete(url)
        return response

    }
    catch (error) {
        return error
    }
}

const index = async () => {
    try{
        const url = `${import.meta.env.VITE_BACKEND_URL}/tracks`
        const response = await axios.get(url)
        return response

    }
    catch(error){
        return error
    }

}

const update = async (data,id) => {
    try{
        const url = `${import.meta.env.VITE_BACKEND_URL}/tracks/${id}`
        const response = await axios.put(url,data)
        return response
        

    }
    catch(error){
        return error
    }

}

export {
    create,
    deleteTrack,
    index,
    update
}