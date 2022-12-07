import * as folderService from '../services/folderService.js'

export const readFolders = async (req, res) => {
  const folders = await folderService.readFolders()
  res.json({response: folders})
}

export const readFolder = async (req, res) => {
  const folder = await folderService.readFolder(req.params.id)
  res.json({response: folder})
}

export const createFolder = async (req, res) => {
  const newFolder = await folderService.createFolder(req.body)
  res.json({response: newFolder})
}



