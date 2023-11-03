import { useState } from "react"
import { useToast } from "@chakra-ui/react" 
import { useHistory } from "react-router-dom" 
import Cookies from "js-cookie"
import authService from "../services/auth"

const useAuth = () => {
  const toast = useToast()
  const navigate = useHistory()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (data: any) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await authService.login(data) 
      Cookies.set("access_token", response?.data?.tokens?.accessToken)
      localStorage.setItem("userId", response?.data?.id)
      setUser(response?.user)
      toast({
        title: "Authentication",
        description: response?.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      navigate.push("/dashboard") 
      navigate.go(0)
    } catch (error: any) {
      setError(error.message)
      toast({
        title: "Login error",
        description: error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      Cookies.remove("access_token")
      setUser(null)
      navigate.push("/")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (data: any) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await authService.register(data)
      console.log(response);
      Cookies.set("access_token", response?.data?.tokens?.accessToken)
      localStorage.setItem("email", data?.email)
      localStorage.setItem("userId", response?.data?.id)
      toast({
        title: "Account created.",
        description: response?.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      navigate.push("/verify-email/"+response?.data?.id)
    } catch (error: any) {
      console.log("registeration error", error)
      setError(error.message)
      toast({
        title: "Account Creation error",
        description: error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const adduserDetails = async (data: any, index: any) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await authService.userDetail(data, index)
      console.log(response); 
      toast({
        title: "Account Updated.",
        description: response?.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      navigate.push("/dashboard")
    } catch (error: any) { 
      setError(error.message)
      toast({
        title: "Account Creation error",
        description: error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const emailVerify = async (data: any) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await authService.emailVerify(data)
      console.log("email verified", response)
      toast({
        title: "Account created.",
        description: response?.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      navigate.push("/setup-profile/"+data?.userId)
    } catch (error: any) {
      console.log("verfication error", error)
      setError(error.message)
      toast({
        title: "Email verification",
        description: error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const sendPasswordResetOtp = async (data: any, next: any) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await authService.sendPasswordResetOtp(data)
      console.log("reset otp", response)
      toast({
        title: "Reset Password",
        description: "OTP has been sent to your email address",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      // navigate.push(`/emailcode?email=${data.email}`)
      next(1)
    } catch (error: any) {
      console.log("verfication error", error)
      setError(error.message)
      toast({
        title: "Email verification",
        description: error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      }) 
    } finally {
      setIsLoading(false)
    }
  }

  const resetPassword = async (data: any, next: any) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await authService.passwordReset(data)
      console.log("reset password", response)
      toast({
        title: "Reset Password",
        description: "Password changed successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      navigate.push(`/signin`)
    } catch (error: any) {
      console.log("verfication error", error)
      setError(error.message)
      toast({
        title: "Reset password",
        description: error?.response?.data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      next(3)
    } finally {
      setIsLoading(false)
    }
  } 

  return { user, isLoading, error, login, logout, register, emailVerify, sendPasswordResetOtp, resetPassword, adduserDetails }
}

export default useAuth
