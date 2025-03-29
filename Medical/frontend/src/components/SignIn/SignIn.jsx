import React from 'react'

const SignIn = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center  bg-[#776c6c]'
      // style={{ backgroundImage: "url(./src/images/space.jpg)", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}
      >

      <form className='w-[400px] h-[400px]  text-white  shadow-2xl shadow-[#fff] rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl flex justify-center items-center bg-[#7a7571db] border-1'
        action="https://google.com/">
        <div className=' w-full h-full flex flex-col justify-center gap-10 items-center ' >

          <h1 className='text-2xl font-bold'>Sign in</h1>

          <input className=' p-1.5 border-2 border-[#f5f1f1] rounded-2xl' type="text" placeholder='User Name' />
          
          <input className=' p-1.5 border-2 border-[#f5f1f1] rounded-2xl' type="text" placeholder='Password ' />
          
          <input className='border-2 pt-1 pb-1 rounded-2xl pl-3 pr-3' type="submit" value="Sign in" />
        </div>
      </form>

    </div>
  )
}

export default SignIn
