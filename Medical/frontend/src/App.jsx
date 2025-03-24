import { useState } from 'react'
import Header from './components/Header/Header'
import {Outlet} from 'react-router-dom'

import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='w-full h-[12vh] '>
        <Header />
      </header>
      <main className='w-full h-fit'>
        <Outlet />
      </main>
      <footer className='w-full h-[8vh] flex justify-between items-center bg-amber-200'>
        <Footer />
      </footer>
    </>
  )
}

export default App
