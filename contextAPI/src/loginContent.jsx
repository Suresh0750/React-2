


import React,{useState} from 'react'


const LoginContent = () => {
    const [userName,setName] = useState()
    const [password,setPassword] = useState()
    console.log(userName)
    console.log(password)
  return (
    <div>
        <input type="email" onChange={(e)=>setName(e.target.value)} placeholder='enter your email'/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholde="Enter a password"/>
        <button>Submite</button>
    </div>
  )
}

export default LoginContent
