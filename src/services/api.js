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

export const LoginApi = (query_params={}, payload={}) => {
    try {
        const response = axios.post(
            gen_api("login/", query_params),
            payload,
        )
        return response
    } catch (e) {
        console.log(e)
        window.alert("Failed to call api")
    }
}