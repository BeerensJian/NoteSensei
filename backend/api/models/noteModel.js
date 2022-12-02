import mongoose from 'mongoose'

/*
* Define a mongoose Schema
* -> what a single note document will look like in mongoDB
*/
const NoteSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String }
})

// compile model from schema
// First argument : the singular name of the collection in mongoDB
// Second argument : the schema
export const NoteModel = mongoose.model('Note', NoteSchema)