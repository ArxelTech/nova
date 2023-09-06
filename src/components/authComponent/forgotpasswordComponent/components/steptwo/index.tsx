import { Button, Box, Link, PinInput, PinInputField, Text, Flex } from "@chakra-ui/react" 
import React from "react"  

interface Props {
    next: any
}

function StepTwo(props: Props) {
    const {
        next
    } = props

    const [pin, setPin] = React.useState("")

    const handleSubmit =(e: any)=> {
        e.preventDefault()
    }

    const handleComplete = (value: string) => { 
        setPin(value) 
        next(2)
        console.log(pin);
    }

    return ( 
        <form style={{width: "100%"}} onSubmit={(e)=> handleSubmit(e)}> 
            <Box display={"flex"} flexDirection={"column"} gap={"20px"} >
                <Flex alignItems={"center"} width={"full"} >   
                    <PinInput  onComplete={handleComplete} focusBorderColor="brand.inactive"  otp placeholder="0" >
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                        <Text fontSize={"60px"} display={["none", "none", "block"]} mx="6px" color={"brand.inactive"} >-</Text>
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                        <PinInputField mx={["auto", "auto", "6px"]} fontSize={["28px" ,"28px" ,"48px"]} fontFamily={"700"} color={"white"} borderColor={"brand.inactive"} _focus={{borderColor:"brand.inactive"}}  width={["50px" ,"50px" ,"64px"]} height={["50px" ,"50px" ,"64px"]} />
                    </PinInput>
                </Flex> 
                <Box width={"full"} display={"flex"} mt={"6px"} gap={"21px"} alignItems={"center"} >
                    <Button bg={"brand.base"} color={"white"}  _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}}   >Verify Code</Button>
                    <Link href="" color={"brand.base"} fontFamily={"500"} >Resend Code</Link>
                </Box>
            </Box>
        </form> 
    )
}

export default StepTwo
