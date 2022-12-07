import mongoose from 'mongoose'


const FolderSchema = mongoose.Schema({
  name: String,
  subfolders: [{}], // a folder can contain nested elements of itself
  notes: [{type: mongoose.Types.ObjectId, ref: 'Note'}]
})

export const FolderModel = mongoose.model('Folder', FolderSchema)

