import { useState } from "react"
// import { useToast } from "@chakra-ui/react" 
// import { useHistory } from "react-router-dom" 
import Cookies from "js-cookie"
// import authService from "../services/auth"
import actionService from "../services/action"

const useAuth = () => {
//   const toast = useToast()
//   const navigate = useHistory()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const createroom = async (data: any) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await actionService.createroom(data) 
      Cookies.set("access_token", response?.data?.tokens?.accessToken)
      localStorage.setItem("userId", response?.data?.id)
      setUser(response?.user)
    //   toast({
    //     title: "Authentication",
    //     description: response?.message,
    //     status: "success",
    //     duration: 3000,
    //     isClosable: true,
    //   }) 
    } catch (error: any) {
    //   setError(error.message)
    //   toast({
    //     title: "Login error",
    //     description: error?.response?.data?.message,
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //   })
    } finally {
      setIsLoading(false)
    }
  } 

  return { user, isLoading, error, createroom }
}

export default useAuth
