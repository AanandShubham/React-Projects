import React from 'react'

const Card = ({img}) => {
  return (
    <div>
       <div className="bg-neutral-500 rounded-lg flex flex-col items-center justify-center p-4 h-fit w-fit">
            <img className='w-fit h-fit rounded-md' src={img} alt="Error !! check Connection" />
            <h3>Name will be displayed here</h3>
       </div>
    </div>
  )
}

export default Card
