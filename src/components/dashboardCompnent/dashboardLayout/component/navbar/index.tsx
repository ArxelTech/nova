import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
// import React from 'react'

interface Props {}

function Navbar(props: Props) {
    const {} = props

    return (
        <Flex w={"full"} bg={"brand.black"} borderBottom={"1px"} alignItems={"center"} h={"100px"} pl={"35px"} pr={"24px"} justifyContent={"space-between"} >
            <Button  bg={"brand.black"}  >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H17M3 6H21M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Button>
            <Image width={"90px"} src={"/images/logo.svg"} />
            <Flex alignItems={"center"} gap={"6px"} > 
                <Box>
                    <Text textAlign={"right"} fontFamily={"700"} color={"brand.gray200"} >Michael Nova</Text>
                    <Text textAlign={"right"} fontFamily={"400"} color={"brand.gray300"} >michael@novawatch.io</Text>
                </Box>
                <Box w={"48px"} h={"48px"} rounded={"full"} bg={"brand.base"} >

                </Box>
            </Flex>
        </Flex>
    )
}

export default Navbar
