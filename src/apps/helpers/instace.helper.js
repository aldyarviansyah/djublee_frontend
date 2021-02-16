import axios from "axios"
import storage from "./storage.helper"

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://be-dev.djubli.com",
  timeout: 5000,
})

instance.interceptors.request.use(
  (config) => {
    const cred = storage.getCred()

    if (cred != null) {
      config.headers.Authorization = cred.token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
