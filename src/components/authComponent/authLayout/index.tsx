import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
// import React from 'react'

interface Props {
    title: string,
    body: string,
    link?: string,
    linklabel?: string,
    children: React.ReactNode; 
}

function AuthLayout(props: Props) {
    const {
        title,
        body,
        link,
        linklabel,
        children
    } = props

    return (
        <Box w={"full"} h={"100vh"} overflow={"hidden"} display={"flex"} alignItems={"center"} justifyContent={"center"} position={"relative"} >
            <Image width={"full"} height={"full"} zIndex={"10"} src={"/images/bg.png"} bg={"brand.black"} />
            <Flex flexDirection={"column"}  alignItems={"center"} position={"fixed"} maxHeight={"80vh"} overflowY={"auto"} shadow={"2xl"} width={"600px"} zIndex={"30"} rounded={"16px"} border={"1px"} paddingTop={"35px"} paddingX={"40px"} paddingBottom={"100px"} bg={"brand.black"} >
                <Image width={"90px"} src={"/images/logo.svg"} />
                <Text mt={"20px"} fontFamily={"700"} color={"brand.gray300"} fontSize={"32px"} >{title}</Text>
                <Flex alignItems={"center"} gap={"4px"} >
                    <Text fontFamily={"400"} color={"brand.gray200"} >{body}</Text>
                    <Link color={"brand.base"} href={link} fontFamily={"500"} >{linklabel}</Link>
                </Flex>
                {children}
                <Image src={"/images/TV.png"} width={"125px"} position={linklabel === "Login" ? "fixed" : "absolute"} zIndex={"30"} bottom={"0px"} right={"0px"}  />
            </Flex>
        </Box>
    )
}

export default AuthLayout
