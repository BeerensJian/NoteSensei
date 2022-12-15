import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.css'

// view imports
import AppMenu from './views/AppMenu/AppMenu'
import Error from './views/Error/Error'
import CreateNote from './views/CreateNote/CreateNote'
import Home from './views/Home/Home'

// Service Imports
import * as noteService from './services/noteService'
import Test from './views/Test/Test'

// implement react router
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppMenu />,
    errorElement: <Error />,
    children: [
      {
        path: '/home',
        element: <Home />,
        loader: noteService.getNotes,
      },
      {
        path: '/notes/create',
        element: <CreateNote />,
      },
      {
        path: '/notes/:id',
        element: <h1>note details page</h1>,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
