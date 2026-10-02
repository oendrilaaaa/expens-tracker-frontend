import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const EnterOtp = () => {
  const navigate = useNavigate()
  const {login} = useAuth()
  return (
    <>
    <div className='flex grid min-h-screen place-items-center py-8 '>
        <div className='bg-slate-500 w-96 max-w-sm p-8 flex flex-col items-center rounded-xl shadow-lg'>
           <div className='text-black text-xl font-bold'>
            <div className='place-items-center'>
              <label for="enterotp" class="block mb-2 text-sm font-medium text-gray-900 text-center">Enter OTP</label>
                <input type="text" id="otp" placeholder=""
                class="w-full px-3 py-2 text-sm text-gray-900 bg-white border p-3 mx-auto border-gray-300 rounded-md shadow-sm" />
                </div>
                </div>
                <button 
                onClick={() => {
                  console.log("loginnnnnnnnnnnnnnn", login)
                  login("9090909090", "909090")}}
                className='h-8 w-15 bg-slate-900 rounded  text-white text-sm px-2 mx-3 my-2'>Verify</button>



            
           
        </div>
    </div>
    
    </>
  )
}

export default EnterOtp
