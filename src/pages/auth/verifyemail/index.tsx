import { Box, Flex, PinInput, PinInputField, Link, Text } from '@chakra-ui/react'
import React from 'react'
import AuthLayout from '../../../components/authComponent/authLayout'
// import { useHistory } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { useParams } from 'react-router'
import SubmitBtn from '../../../components/submitbtn'

// interface Props {}

function VerifyEmail() { 

    const [pin, setPin] = React.useState("") 
    const email = localStorage.getItem("email")

    const { id }: any = useParams();        
    

    const { emailVerify, isLoading } = useAuth()
    
    const handleChange = (value: string) => { 
        setPin(value)    
    }

    const handleComplete = () => {  
        
        let code = pin.slice(0, 3)+"-"+pin.slice(3, 6)
        
        emailVerify({
            "userId": id,
            "code": code
        })
    } 


    return (
        <AuthLayout title="Verify your email address" body={"Enter the verification code sent to "+email} >
            <Box width={"full"} mt="30px" > 
                <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                    <Flex alignItems={"center"} width={"full"} >   
                    <PinInput  onComplete={handleChange} focusBorderColor="brand.inactive"  otp placeholder="0" >
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                        <Text fontSize={"60px"} display={["none", "none", "block"]} mx="6px" color={"brand.inactive"} >-</Text>
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                    </PinInput>
                    </Flex> 
                    <Box width={"full"} display={"flex"} mt={["20px","6px"]} gap={"21px"} alignItems={"center"} >
                        <SubmitBtn onClick={()=> handleComplete()} name="Verify Code" loading={isLoading} /> 
                        <Link href="" color={"brand.base"} fontFamily={"500"} >Resend Code</Link>
                    </Box>
                </Box>
            </Box>
        </AuthLayout>
    )
}

export default VerifyEmail
