/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormLabel, Button, Box } from '@chakra-ui/react' 
// import React from 'react' 
import AuthLayout from '../../../components/authComponent/authLayout'
import InputComponent from '../../../components/authComponent/inputComponent'
import { useHistory } from 'react-router-dom'

// interface Props {}

function RegistrationPage() {
    // const {} = props

    const navigate = useHistory()

    const handleSubmit =(e: any)=> {
        e.preventDefault()
        navigate.push("/verify-email")
    }

    return (
        <AuthLayout title="Create Account" body="Already have an account?" linklabel="Login" link="/" >
            <Box width={"full"} mt="30px" >
                <form style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}> 
                    <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >First Name</FormLabel>
                            <InputComponent type="text" placeholder="First-Name" />
                        </Box>
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Last Name</FormLabel>
                            <InputComponent type="text" placeholder="Last-Name" />
                        </Box>
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Email Address</FormLabel>
                            <InputComponent type="email" placeholder="michael@novaapp.io" />
                        </Box>
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Password</FormLabel>
                            <InputComponent type="password" placeholder="*************" right={true} />
                        </Box>
                        <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                            <Button type="submit" bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Create Account</Button> 
                        </Box>
                    </Box>
                </form>
            </Box>
        </AuthLayout>
    )
}

export default RegistrationPage
