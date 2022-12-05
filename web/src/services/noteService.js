import { httpClient } from '.';

export const createNote = async (note) => {
    try {
        const response = await httpClient.post('/notes', note)
        return response?.data
    } catch (error) {
        console.error(error)
    }
}

export const getNotes = async () => {
    try {
        const response = await httpClient.get('/notes')
        return response?.data
    } catch (error) {
        console.error(error)
    }
}

export const getNote = async (noteId) => {
    try {
        const response = await httpClient.get(`/notes/${noteId}`)
        return response?.data
    } catch (error) {
        console.error(error)
    }
}