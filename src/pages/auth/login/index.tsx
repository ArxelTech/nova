/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react"
// import { Link } from "react-router-dom"
import AuthLayout from "../../../components/authComponent/authLayout"
import { Box, Button, FormLabel, Link } from "@chakra-ui/react"
import InputComponent from "../../../components/authComponent/inputComponent"
import { useHistory } from "react-router-dom"


function LoginPage() {

    const navigate = useHistory()

    const handleSubmit =(e: any)=> {
        e.preventDefault()
        navigate.push("/dashboard")
    }

    return (
        <AuthLayout title="Welcome Back" body="Don’t have an account?" linklabel="Sign Up" link="/register" >
            <Box width={"full"} mt="30px" >
                <form style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}> 
                    <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Email Address</FormLabel>
                            <InputComponent type="email" placeholder="michael@novaapp.io" />
                        </Box>
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Password</FormLabel>
                            <InputComponent type="password" placeholder="*************" right={true} />
                        </Box>
                        <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                            <Button type="submit" bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Log In</Button>
                            <Link href="/forgot-password" color={"brand.base"} fontFamily={"500"} >Forgot Password</Link>
                        </Box>
                    </Box>
                </form>
            </Box>
        </AuthLayout>
    )
}

export default LoginPage;
