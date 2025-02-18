import axios from "axios"
// import { getCachedSession } from "../common/utils"
let apiUrl = process.env.ENVIRONMENT === "production" ? process.env.PRODUCTION_API_URL : process.env.DEVELOPMENT_API_URL

const axioInstance = axios.create({ baseURL: apiUrl, headers: { Accept: "application/json" } })

// do something before requesting
axioInstance.interceptors.request.use(async (config) => {
    // if (typeof window !== "undefined") {
    //     const session = await getCachedSession() // Fetch or retrieve cached session
    //     console.log(session ?? "no session")
    //     if (session && config.url !== "/.netlify/functions/getlist") {
    //      config.headers["Authorization"] = `Bearer ${session.user.access_token}`
    config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVkMGIxZjE2YTFjMjg4NGU5YmU4MzQiLCJlbWFpbCI6IkxpbGlhbmExMjNAZ21haWwuY29tIiwiaWF0IjoxNzM5NzMxMTM4LCJleHAiOjE3NDgzNzExMzh9.e8D2_iwk6enCC9LlHcmuxSNoklE1nrscdvz-waI8kkQ`
    //     } else {
    //         delete config.headers["Authorization"]
    //     }
    // }
    return config
}, (error) => {
    return Promise.reject(error)
})

// do something after responding
axioInstance.interceptors.response.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

export default axioInstance
