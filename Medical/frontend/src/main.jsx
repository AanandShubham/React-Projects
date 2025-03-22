import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Home,About,Contact,Login } from './components/index.js'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About />,
      },
      {
        path:"contact",
        element:<Contact />
      }   
    ],
  },
  {
    path:"/Login",
    element:<Login />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
