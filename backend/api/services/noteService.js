import { NoteModel } from '../models/noteModel.js'

export const readNote = async () => await NoteModel.findOne({}) // fetches a single note from the database

export const createNote = async (note) => await new NoteModel(note).save() // creates a single note


