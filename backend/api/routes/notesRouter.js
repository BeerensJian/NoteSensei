import express from 'express'
const router = express.Router();

router.get('/', (req, res) => {
    res.send('sup')
})

export default router;