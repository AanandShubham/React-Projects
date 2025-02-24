import React, { useEffect, useState } from 'react'

function useGitUser(username){
    const [gitUser,setGitUser] = useState({})

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then((res)=>res.json())
        .then((res)=>setGitUser(res))
    },[username])

    return gitUser;
}

export default useGitUser;
