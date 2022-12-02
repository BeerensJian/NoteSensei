import * as noteService from '../services/noteService.js'

export const getNote = async (req, res) => { // fetches a single note from the database
    const note = await noteService.readNote()
    res.json({response : note})
}

export const createNote = async (req, res) => {
    const note = await noteService.createNote(req.body)
    res.json({response : note})
}