  import React from 'react'
import { useNavigate } from 'react-router-dom';

  const SignIn = () => {

    const navigate = useNavigate()

    // write sign in codes here in frontend and backend both 
    const handleSubmit = async (e) => {
      e.preventDefault();

      const data = e.target.elements;

      const formData = {
        'username': data.username.value,
        'password': data.password.value
      };

      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then((res) => res.json())
        .then((res) => res);

      console.log("response : ", response);
      if(await response.status === 'valid') {
          const stateData = {
            'username':formData.username,
            'usertype':response.usertype,
            'signin':true
          }
          if(stateData.usertype === 'seller'){
              stateData['shopname'] = response.shopname;
              stateData['shopid'] = response.shopid;
          }

          navigate('/',{state:stateData})

      } else {
        window.alert("Username or password is invalid")
      }

    }

    return (
      <div className='w-full h-screen flex justify-center items-center  bg-[#776c6c]'
      // style={{ backgroundImage: "url(./src/images/space.jpg)", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}
      >

        <form
          onSubmit={handleSubmit}
          className='w-[400px] h-[400px]  text-white  shadow-2xl shadow-[#fff] rounded-tl-4xl rounded-tr-2xl rounded-bl-2xl flex justify-center items-center bg-[#7a7571db] border-1'
        >
          <div className=' w-full h-full flex flex-col justify-center gap-10 items-center ' >

            <h1 className='text-2xl font-bold'>Sign in</h1>

            <input className=' p-1.5 border-2 border-[#f5f1f1] rounded-2xl' name='username' type="text" placeholder='User Name' />

            <input className=' p-1.5 border-2 border-[#f5f1f1] rounded-2xl' name='password' type="text" placeholder='Password ' />

            <input className='border-2 pt-1 pb-1 rounded-2xl pl-3 pr-3' type="submit" value="Sign in" />
          </div>
        </form>

      </div>
    )
  }

  export default SignIn
