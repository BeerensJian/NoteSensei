import * as folderService from '../services/folderService.js'

// Returning and object with a response property to support adding message property in the future


// get all root folders
export const readFolders = async (req, res) => {
  const folders = await folderService.readFolders({parent : null})
  res.json({response: folders})
}
// get all subfolders from a folder
export const readSubfolders = async (req, res) => {
  const parentId = req.params.id
  const subfolders = await folderService.readFolders({parent : parentId})
  res.json({response: subfolders})
}

export const readFolder = async (req, res) => {
  const folder = await folderService.readFolder(req.params.id)
  res.json({response: folder})
}

export const createFolder = async (req, res) => {
  const newFolder = await folderService.createFolder(req.body)
  res.json({response: newFolder})
}

