import { NoteModel } from '../models/noteModel.js'

export const readNote = async (noteId) => await NoteModel.findOne({ _id : noteId }) // fetches a single note from the database

export const createNote = async (note) => await new NoteModel(note).save() // creates a single note

export const readNotes = async () => await NoteModel.find({}) // fetches all notes


