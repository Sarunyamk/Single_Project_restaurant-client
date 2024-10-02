import React, { useState } from 'react'
import useAppStore from '../zustand/appStore'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const navigate = useNavigate()

  const [form,setForm] = useState({

    email : '',
    password : ''
  })

  const actionLogin = useAppStore((state)=> state.actionLogin)

  const handleChange = (e) => {
    
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(form,"this is form")
    const role = await actionLogin(form)
    console.log(role,"this is role")
    
    if(role){

      roleRedirect(role)
    }    
  }

  const roleRedirect = (role)=>{
    
    const checkRole = role.data.user.user.role
    
    console.log(checkRole,"นี่คือืออ")

    if(checkRole === "ADMIN"){

      navigate('/admin')
    }else{
      navigate('/menu')
    }
  }

  return (
    <div>
      <form    onSubmit={handleSubmit}
              className='bg-red-gradient max-w-md w-full mx-auto my-60 py-4 flex flex-col justify-center items-center gap-4'>
        <h1 className='font-main text-yellow my-4 '>Login</h1>
        <input     name="email" onChange={handleChange} value={form.email}
                  className='p-2 outline-none w-10/12' type="email" placeholder='Put your Email...'/>
        <input     name="password" onChange={handleChange} value={form.password}
                  className='p-2 outline-none w-10/12' type="password" placeholder='Put your password...'/>
        
        <button className='bg-yellow text-white py-4 px-6 font-head  rounded-xl'>Login</button>
      </form>
    </div>
  )
}
