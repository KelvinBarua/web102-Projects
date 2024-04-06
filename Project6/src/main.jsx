import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import NotFound from './pages/PageNotFound.jsx';
import InfoPage from './pages/infoPage.jsx';
import StatsPage from './pages/StatsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/:pageId',
    element: <InfoPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/StatsPage',
    element: <StatsPage />,
    errorElement: <StatsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
