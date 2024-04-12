import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import './index.css'

import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import CreatePage from './pages/CreatePage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path: '/createCrewmatePage',
    element: <CreatePage />,
    errorElement: <PageNotFound />
  },
  {
    path: '/crewmateGalleryPage',
    element: <GalleryPage />,
    errorElement: <PageNotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
