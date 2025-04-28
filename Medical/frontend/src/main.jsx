import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'
import { Home, About, Contact, SignIn, SignUp, Warehouse, Sold, SellerHome, Diases, Wishlist, Cart, Medicines } from './components/index.js'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact/:id",
        element: <Contact />,
        loader: () => {
          // const {id} = useParams()
          console.log("message from routes");
          return "message from main"
        },

      },
      {
        path: "werehouse",
        element: <Warehouse />,
        children: [
          {
            path: "/werehouse/",
            element: <SellerHome />
          },
          {
            path: "/werehouse/diases/",
            element: <Diases />
          }
        ]
      },
      {
        path: 'sold',
        element: <Sold />
      },
      {
        path:'wishlist',
        element:<Wishlist />
      },
      {
        path:'cart',
        element:<Cart />
      },
      {
        path:'medicines',
        element:<Medicines />
      }
    ],
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signout",
    element: <SignUp />
  }
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
)
