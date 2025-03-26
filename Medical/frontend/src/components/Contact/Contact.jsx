import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Contact = () => {
  const data = useLoaderData();
  const {id} = useParams();
  // console.log(id)

  return (
    <div>
      Contact : {id}
      data : {data}
      {/* Age : {age} */}
    </div>
  )
}

export default Contact
