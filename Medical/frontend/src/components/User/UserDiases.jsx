import React from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

const UserDiases = () => {

  const location = useLocation()
  // useOutlet();

  const loadMedicines = async ()=>{
    fetch(`http://localhost:3000/getallmedicines/${location.state.did}`)
    .then((res)=> res.json())
  }

  return (
    <div>
      {location.state.dname} Diases
    </div>
  )
}

export default UserDiases
