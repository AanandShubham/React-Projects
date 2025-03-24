import React from 'react'
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='w-full text-center mt-20'>
      <div className='main w-full h-fit p-2 flex justify-around  bg-gradient-to-tl from-[#fff] to-[#1f1]'>
        <img className='w-[100px] h-[100px] mix-blend-darken' src="./src/images/medical_logo.jpg" alt="" />

        <div className="container  flex  justify-around w-1/3 ">
          <ul className='first flex flex-col hover:cursor-pointer'>
            <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>RESOURCES</li>
            <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>
             <NavLink className={({isActive})=> isActive?"text-blue-500":""} to="/" >Home</NavLink>
            </li>
            <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>
              <NavLink className={({isActive})=> isActive?"text-blue-500":""} to="/about" >About</NavLink>
            </li>
          </ul>
          <ul className="second flex flex-col justify-around">
            <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>FOLLOW_US</li>
            <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>Github</li>
            <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>Discord</li>
          </ul>
          <ul className="third flex flex-col justify-around">
            <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>LEGAL</li>
            <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>Privacy Policy</li>
            <li className='p-2 rounded-2xl hover:scale-110 hover:text-orange-400'>Terms & Conditions</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
