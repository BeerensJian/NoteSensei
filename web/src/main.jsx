import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.scss'

// view imports
import AppMenu from './views/AppMenu/AppMenu'
import Error from './views/Error'
import Note from './views/Note'
import CreateNote from './views/CreateNote'



// implement react router
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppMenu/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/notes/create',
        element: <CreateNote/>
      },
      {
        path: '/notes/:id',
        element: <Note/>,
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
