import axiosInstance from "./axiosInstance"


const createroom = async (data: any) => {
  const response = await axiosInstance.post("/room/create", data)
  return response.data
}



const actionService = {
    createroom
  }
  
  export default actionService