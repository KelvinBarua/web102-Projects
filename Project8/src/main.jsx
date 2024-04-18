import React from 'react'
import ReactDOM from 'react-dom/client'

//pages
import App from './App.jsx'
import CreatePost from './pages/CreatePost.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

//css
import './index.css'

//react router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />
  },
  {
    path: '/createPost',
    element: <CreatePost />,
    errorElement: <PageNotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
