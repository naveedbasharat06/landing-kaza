import http from "./http"
import endPoints from "./endPoints"

export const signup = async (data:{}) => {
    return http.post(`${endPoints.signup}`,data)
}

export const signIn = async (data:{}) => {
    return http.post(`${endPoints.signin}`,data)
}