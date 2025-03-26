import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider, useParams } from 'react-router-dom'
import { Home,About,Contact,SignIn, SignOut } from './components/index.js'
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
        path:"contact/:id",
        element:<Contact />,
        loader:()=>{
          // const {id} = useParams()
          console.log("message from routes");
          return "message from main"
        }
      }   
    ],
  },
  {
    path:"/signin",
    element:<SignIn />
  },
  {
    path:"/signout",
    element:<SignOut />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
