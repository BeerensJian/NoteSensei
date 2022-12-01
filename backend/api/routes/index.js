import express from 'express'
import notesRouter from './notesRouter.js'
const router = express.Router()

const routes = [
    {
        path: '/notes',
        router: notesRouter
    }
]

routes.forEach((route) => router.use(route.path, route.router))
export default router;