import express from 'express'
import notesRouter from './notesRouter.js'
import folderRouter from './folderRouter.js'
const router = express.Router()

const routes = [
    {
        path: '/notes',
        router: notesRouter
    },
    {
        path: '/folders',
        router: folderRouter
    }
]

routes.forEach((route) => router.use(route.path, route.router))
export default router;