import axios from "axios";
import { API_BASE_URL } from "./constants"
/*


base url example = https://google.com
api path = images/

api = https://google.com/images/

api with query params = https://google.com/images/?search=oendrila


base url
Api path
query params
request data
*/

function gen_api(api_path="", query_params = {}) {
    let api = `${API_BASE_URL}/api/${api_path}`
    // TOOD need to add logic for query_params to append at end
    console.log("generated Api url ", api)
    return api
}
//making sendotp actually send a request at the backend for sending otp
export const sendOtpApi= async(mobile) =>{

    const response = await axios.post(
        gen_api("auth/"),
        {phone: mobile}
    )

    return response
}

export const sendLoginOtp = async(mobile, callback) =>{

    if (mobile?.length != 10){
        window.alert("Enter a valid number")
        return callback(false,{})
    }
    try{
        await sendOtpApi(mobile)
        callback(true,{})
    }catch(e){
        console.log(e)
        callback(false,{})
    }   
}

export const verifyOtpApi = async(mobile, otp, callback)=>{
    if (otp?.length != 6){
        window.alert("enter a valid otp")
        return callback(false,{})
    }
    try {
        const resp = await axios.post(
            gen_api("auth/"),
            {phone: mobile, otp:otp},
            
        )
        return callback(true,resp.data)
        
    } catch (error) {
        console.log(error)
        return callback(false,{})
        
    }
}


// export const LoginApi = (query_params={}, payload={}) => {
//     try {
//         const response = axios.post(
//             gen_api("login/", query_params),
//             payload,
//         )
//         return response
//     } catch (e) {
//         console.log(e)
//         window.alert("Failed to call api")
//     }
// }