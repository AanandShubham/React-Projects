import React from 'react'

const SignIn = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center  bg-amber-200'
      style={{ backgroundImage: "url(./src/images/space.jpg)", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}>

      <form className='w-[400px] h-[400px]  text-white  rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl flex justify-center items-center bg-[#7a757181] border-2'
        action="https://google.com/">
        <div className=' w-full h-full flex flex-col justify-center gap-10 items-center ' >

          <h1 className='text-2xl font-bold'>Sign In</h1>

          <input className='hover:border-[1px] p-1.5' type="text" placeholder='User Name' />
          
          <input className='hover:border-[1px] p-1.5' type="text" placeholder='Password ' />
          
          <input className='border-2 pt-1 pb-1 rounded-2xl pl-3 pr-3' type="submit" value="Sign In" />
        </div>
      </form>

    </div>
  )
}

export default SignIn
