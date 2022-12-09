import mongoose from 'mongoose'

/* 
* Create root folder -> parent property = null 
* Create Subfolder -> parent property = id of parent
*/

const FolderSchema = mongoose.Schema({
  name: String,
  parent: {
    type: mongoose.Types.ObjectId,
    default: null
  },
  notes: [{type: mongoose.Types.ObjectId, ref: 'Note'}]
})

export const FolderModel = mongoose.model('Folder', FolderSchema)

