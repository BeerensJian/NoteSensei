import express from 'express'
import * as folderController from '../controllers/folderController.js'
const router = express.Router()

router.get('/', folderController.readFolders)
router.post('/', folderController.createFolder)

export default router