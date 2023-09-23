import axios from "axios"
import Cookies from "js-cookie"

const BASE_URL = import.meta.env.VITE_APP_BASE_URL
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
})
axiosInstance.interceptors.request.use(
  function (config: any) {
    const token = Cookies.get("access_token")
    if (token) {
      config.headers["Authorization"] = "Bearer " + ""
    }
    return config
  },
  function (error: any) {
    if (error.response.status === 500) {
      error.response.data.message = "Something wrong has happened. Try again later."
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
