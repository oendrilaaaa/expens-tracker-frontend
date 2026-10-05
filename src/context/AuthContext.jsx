import { createContext, useState, useContext } from "react";
import { sendOtpApi, sendLoginOtp } from "../services/api";
export const AuthContext = createContext()

export const useAuth = () => {

    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(localStorage.getItem("user"))
    const [accessToken, setAccessToken] = useState(localStorage.getItem("access_token"))
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refresh_token"))

    
    const sendLoginOTP = (mobile, callback) => {
        // validate value, should be a valid mobile number without country code.
        if (mobile?.length !== 10) {
            // show error
            window.alert("Enter a valid mobile number")
            callback(false, {})
            return
        }
        window.alert(`Otp to be sent on mobile number ${mobile}`)
        // TODO Api to be called here, when Api gives otp sent successful then only return true
        callback(true, {})
    }

    // const login = (mobile, otp) => {
    //     if (otp?.length !== 6) {
    //         window.alert("Enter OTP of 6 digit only")
    //         return
    //     }
    //     const resp = LoginApi({}, {
    //         mobile:mobile,
    //         otp:otp,
    //     })
    //     // TODO need to call Login Api here
    //     console.log("logged in!!")
    //     localStorage.setItem("user", JSON.stringify(resp))
    //     localStorage.setItem("access_token", resp?.access_token)
    //     localStorage.setItem("refresh_token", resp?.refresh_token)
    //     setUser(resp)
    //     setAccessToken(resp?.access_token)
    //     setRefreshToken(resp?.refresh_token)
    // }


    const logout = () => {
        setUser(null)
        setAccessToken(null)
        setRefreshToken(null)

    }
    return (

        <AuthContext.Provider value={{
            user,
            accessToken,
            refreshToken,
            logout,
            sendLoginOtp
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
