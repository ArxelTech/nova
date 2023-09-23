import axiosInstance from "./axiosInstance"


const login = async (data: any) => {
  const response = await axiosInstance.post("/authentication/login", data)
  return response.data
}

const register = async (data: any) => {
  const response = await axiosInstance.post("/authentication/signup", data)
  return response.data
}

const emailVerify = async (data: any) => {
  const response = await axiosInstance.post("/authentication/verify-email", data)
  return response.data
}

const sendPasswordResetOtp = async (data: any) => {
  const response = await axiosInstance.post("/authentication/verify-password-reset-code", data)
  return response.data
}

const passwordReset = async (data: any) => {
  const response = await axiosInstance.put("/authentication/reset-password", data)
  return response.data
} 

const authService = {
  login,
  register,
  emailVerify,
  sendPasswordResetOtp,
  passwordReset 
}

export default authService
