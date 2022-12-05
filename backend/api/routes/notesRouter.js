import express from 'express'
import * as noteController from '../controllers/noteController.js'
const router = express.Router();

router.get('/:id', noteController.getNote)
router.get('/', noteController.getNotes)
router.post('/', noteController.createNote)

export default router;