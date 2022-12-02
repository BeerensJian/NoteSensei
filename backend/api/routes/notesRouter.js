import express from 'express'
import * as noteController from '../controllers/noteController.js'
const router = express.Router();

router.get('/', noteController.getNote)
router.post('/', noteController.createNote)

export default router;