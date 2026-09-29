import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const[otpSent, setOtpSent]= useState(false)
  const navigate = useNavigate()
  const sendOTP = ()=>{
        setOtpSent(!otpSent)
        }
  return (
    <>
      <div className='flex grid min-h-screen place-items-center py-8 '>
        <div className='bg-slate-500 w-96 max-w-sm p-8 flex flex-col items-center rounded-xl shadow-lg'>
           <div className='text-black text-xl font-bold'>Register</div>
           <div className=' items-center flex flex-col place-items-center py-3 text-white'>
              
              <input type="text"
                    id="username"
                    placeholder='Enter your username'
                    className='w-full px-3 py-2 bg-white border border-gray-900 focus:outline-none rounded-xl' />
              <div className="py-4">
                <input type="number"
                    id="number"
                    placeholder='Enter your mobile number'
                    className='w-full px-3 py-2 bg-white border border-gray-900 focus:outline-none rounded-xl' />
           
              </div>
               <div >
                <input type="text"
                    id="name"
                    placeholder='Enter your name'
                    className='w-full px-3 py-2 bg-white border border-gray-900 focus:outline-none rounded-xl' />
           
              </div>
           </div>
           <div className='py-1'>
              <button 
               
                className=' px-6 py-4 bg-slate-800 text-white rounded-xl hover:bg-black'
                >Register</button>
           </div>
           
            <div className='flexbox flex px-10 py-2'>Already a member?  
              <button 
              onClick={()=>{navigate('/')}}
              className='px-2 text-red-950 hover:bg-slate-300 rounded'>Login here</button></div>  
        </div>
           
      </div>   
    </>
  )
}


export default Register
