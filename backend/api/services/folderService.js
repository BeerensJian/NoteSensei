import { FolderModel } from '../models/folderModel.js'

export const createFolder = async (folder) => await new FolderModel(folder).save()

export const readFolder = async (folderId) => await FolderModel.findById(folderId)

export const readFolders = async (criteria) => await FolderModel.find(criteria)

export const updateFolder = async (folderId, updateObj) => 
  await FolderModel.findByIdAndUpdate(folderId, updateObj)

export const deleteFolder = async (folderId) => await FolderModel.findByIdAndDelete(folderId)