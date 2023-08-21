import { Box, Button, Flex, PinInput, PinInputField, Link, Text } from '@chakra-ui/react'
import React from 'react'
import AuthLayout from '../../../components/authComponent/authLayout'
import { useNavigate } from 'react-router-dom'

interface Props {}

function VerifyEmail(props: Props) {
    const {} = props

    const [pin, setPin] = React.useState("")
    const navigate = useNavigate() 
    
    const handleComplete = (value: string) => { 
        setPin(value)  
        console.log(pin);
        navigate("/setup-profile")
    }


    return (
        <AuthLayout title="Verify your email address" body="Enter the verification code sent to michael@novaapp.io" >
            <Box width={"full"} mt="30px" > 
                <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                    <Flex alignItems={"center"} width={"full"} >   
                        <PinInput  onComplete={handleComplete} focusBorderColor="brand.inactive"  otp placeholder="0" >
                            <PinInputField mx="6px" fontSize={"48px"} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={"64px"} height={"64px"} />
                            <PinInputField mx="6px" fontSize={"48px"} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={"64px"} height={"64px"} />
                            <PinInputField mx="6px" fontSize={"48px"} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={"64px"} height={"64px"}/>
                            <Text fontSize={"60px"} mx="6px" color={"brand.inactive"} >-</Text>
                            <PinInputField mx="6px" fontSize={"48px"} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={"64px"} height={"64px"} />
                            <PinInputField mx="6px" fontSize={"48px"} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={"64px"} height={"64px"} />
                            <PinInputField mx="6px" fontSize={"48px"} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={"64px"} height={"64px"}/>
                        </PinInput>
                    </Flex> 
                    <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                        <Button bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Verify Code</Button>
                        <Link href="" color={"brand.base"} fontFamily={"500"} >Resend Code</Link>
                    </Box>
                </Box>
            </Box>
        </AuthLayout>
    )
}

export default VerifyEmail
