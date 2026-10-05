import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { sendLoginOtp } from '../services/api'

const Login = () => {
  const navigate = useNavigate()
  const { sendLoginOTP, login } = useAuth()
  // states
  const [mobile, setMobile] = useState("")
  const [otp, setOtp] = useState(null)
  const [otpSent, setOtpSent] = useState(false)
  const [displayOtp, setDisplayOtp] = useState(false)

  const sendOtpRespHandler = (success, response) => {
    if (success) {
      setDisplayOtp(true)
    } else {
      setDisplayOtp(false)
    }
  }

  return (
    <>
      <div className='flex min-h-screen place-items-center py-8 justify-center'>
        <div className='bg-slate-500 w-96 max-w-sm p-8 flex flex-col items-center rounded-xl shadow-lg'>
          <div className='text-black text-xl font-bold'>Login</div>

          <div className=' items-center flex flex-col place-items-center py-3 '>
            <input
              onChange={(e) => { setMobile(e.target.value) }}
              type="number"
              id="number"
              placeholder='Enter mobile'
              className='w-full px-3 py-2 bg-white border border-gray-900 focus:outline-none rounded-xl' />
            {
              displayOtp && (
                <>
                  <br />
                  <input
                    onChange={(e) => { setOtp(e.target.value) }}
                    type="number"
                    id="number"
                    placeholder='OTP'
                    className={`w-full px-3 py-2 bg-white border border-gray-900 focus:outline-none rounded-xl ${displayOtp ? '' : 'hidden'}`} />
                </>
              )
            }
          </div>
          <div className='py-3'>
            {
              displayOtp ? (
                <button
                  onClick={() => login(mobile, otp)}
                  className=' px-6 py-4 bg-slate-800 text-white rounded-xl hover:bg-black'
                >Login</button>
              ) : (
                <button
                  onClick={() => sendLoginOtp(mobile, sendOtpRespHandler)}
                  className=' px-6 py-4 bg-slate-800 text-white rounded-xl hover:bg-black'
                >Send OTP</button>
              )
            }
          </div>
          {otpSent && <button className='text-red-950 mx-auto items-center py-2'
          >Resend OTP</button>}
          <div className='flexbox flex px-10 py-2'>Not a member?
            <button
              onClick={() => { navigate('/register') }}
              className='px-2 text-red-950 hover:bg-slate-300 rounded'>Register here</button></div>
        </div>

      </div>
    </>

  )
}

export default Login
