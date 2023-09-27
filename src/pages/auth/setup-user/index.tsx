/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import AuthLayout from '../../../components/authComponent/authLayout'
import { Box, Button, Flex, FormLabel } from '@chakra-ui/react'
import InputComponent from '../../../components/authComponent/inputComponent'
import { useHistory } from 'react-router-dom'

// interface Props {}

function SetupUser() {
    // const {} = props

    const navigate = useHistory() 
    
    const handleSubmit =(e: any)=> {
        e.preventDefault()
        navigate.push("/")
    }

    return (
        <AuthLayout title="Setup your profile" body=""  >
            <Box width={"full"} mt="30px" > 
                <form style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}> 
                    <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                        <Flex as="button" w={"99px"} mx={"auto"} rounded={"full"} h={"99px"} justifyContent={"center"} alignItems={"center"} bg={"#6670852B"} >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Flex>
                        <Box width={"full"} > 
                            <FormLabel fontFamily={"700"} color={"brand.inactive"} fontSize={"sm"} >Username</FormLabel>
                            <InputComponent type="text" placeholder="@michael" right={true} rightIcon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011M22 4.00011L12 14.0101L9.00001 11.0101" stroke="#32D583" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            } />
                        </Box> 
                        <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                            <Button type="submit" bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Continue</Button>
                            {/* <Link href="/forgot-password" color={"brand.base"} fontFamily={"500"} >Forgot Password</Link> */}
                        </Box>
                    </Box>
                </form>
            </Box>
        </AuthLayout>
    )
}

export default SetupUser
