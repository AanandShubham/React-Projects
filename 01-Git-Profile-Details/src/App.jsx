import { useEffect, useState,useRef } from 'react'
import Form from './components/Form'
import Card from './components/Card'
import useGitUser from './hooks/useGitUser'


function App() {
  const [img, setImg] = useState(null)
  const [user,setUser] = useState({})
  let userRef = useRef(null)

  const [userName,setUserName] = useState("AanandShubham")

  let gitUser = useGitUser(userName)

  const handleGet = ()=>{
      console.log(userRef.current.value)
      setUserName(userRef.current.value)
  }

  useEffect(() => {
    setUser(gitUser)
    setImg(user.avatar_url)
  },)

  return (
    <>
      <div className='w-screen h-screen flex items-center p-8 gap-5 flex-col bg-slate-900 '>
        <h2 className='bg-sky-400 w-fit px-22 rounded-md py-1'>Get User Profile</h2>
        <Form handleGet={handleGet} userRef={userRef} />
        <Card img={img} />
      </div>

    </>
  )
}

export default App
