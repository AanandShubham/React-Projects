import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar.jsx'
import Name from './components/Name.jsx'
import Addr from './components/Addr.jsx'
import FullName from './components/FullName.jsx'
import FullAddr from './components/FullAddr.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <NavBar />
        <Home />
      </div>
  },
  {
    path: "/about",
    element:
      <div>
        <NavBar />
        <About />
      </div>,
    children: [
      {
        path: "Name",
        element: <Name />
      },
      {
        path: "Addr",
        element: <Addr />,
        children: [
          {
            path: "fullname",
            element: <FullName />
          },
          {
            path: "fulladdr",
            element: <FullAddr />
          }
        ]
      }
    ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
