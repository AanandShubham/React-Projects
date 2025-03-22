import { useState } from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='w-full h-[12vh] '>
        <Header />
      </header>
      <main className=''>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
