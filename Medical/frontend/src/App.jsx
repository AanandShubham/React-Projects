import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import {Outlet, useLocation} from 'react-router-dom'

import Footer from './components/Footer/Footer'


function App() {
  // const [headerState,setHeaderState] = useState({userType:"",signin:false})

  const location = useLocation();
  console.log("Location Data : ",location.state);
  // setHeaderState(location.state);
  // const headerState = {userType:" ",signin:false}

  // useEffect(()=>{
    
  // },[])

  return (
    <>
      <header className='w-full h-[12vh] '>
        <Header headerState={location.state}/>
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
