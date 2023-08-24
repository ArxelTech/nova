import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import Navbar from '../../dashboardCompnent/dashboardLayout/component/navbar';
import { useNavigate } from 'react-router-dom';
// import React from 'react'

interface Props {
    title: string,
    body: string,
    link?: string,
    linklabel?: string,
    children: React.ReactNode; 
    dashboard?: boolean
}

function AuthLayout(props: Props) {
    const {
        title,
        body,
        link,
        linklabel,
        children,
        dashboard
    } = props

    const navigate = useNavigate()

    return (
        <Box w={"full"} h={"100vh"} overflow={"hidden"} display={"flex"} bg={"brand.black"} alignItems={"center"} justifyContent={"center"} position={"relative"} >
            {!dashboard && (
                <Image width={"full"} height={"full"} zIndex={"10"} src={"/images/bg.png"} bg={"brand.black"} />
            )}
            {dashboard && (
                <Box w={"full"} position={"fixed"} top={"0px"} zIndex={"30"} > 
                    <Navbar />
                </Box>
            )}
            {dashboard && (
                <Box onClick={()=> navigate("/dashboard")} as="button" position={"fixed"} zIndex={"30"} top={"20%"} left={"60px"} > 
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 38.5C30.665 38.5 38.5 30.665 38.5 21C38.5 11.335 30.665 3.5 21 3.5C11.335 3.5 3.5 11.335 3.5 21C3.5 30.665 11.335 38.5 21 38.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.125 21H16.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.125 15.75L14.875 21L20.125 26.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Box>
            )}
            <Flex flexDirection={"column"}  alignItems={dashboard ? "":"center"} mt={dashboard ? "30px": ""} position={"fixed"} maxHeight={"80vh"} overflowY={"auto"} shadow={"2xl"} width={"600px"} zIndex={"30"} rounded={"16px"} border={"1px"} paddingTop={"35px"} paddingX={"40px"} paddingBottom={"100px"} bg={"brand.black"} >
                {!dashboard && (
                    <Image width={"90px"} src={"/images/logo.svg"} />
                )}
                <Text mt={"20px"} fontFamily={"700"} color={"brand.gray300"} fontSize={"32px"} >{title}</Text>
                <Flex alignItems={"center"} gap={"4px"} >
                    <Text fontFamily={"400"} color={"brand.gray200"} >{body}</Text>
                    <Link color={"brand.base"} href={link} fontFamily={"500"} >{linklabel}</Link>
                </Flex>
                {children}
                {title !== "Joining Watch Party" && ( 
                    <Image src={"/images/TV.png"} width={"125px"} position={linklabel === "Login" ? "fixed" : "absolute"} zIndex={"30"} bottom={"0px"} right={"0px"}  />
                )}
                {title === "Joining Watch Party" && ( 
                    <Image src={"/images/TV.png"} width={"125px"} position={linklabel === "Login" ? "fixed" : "absolute"} zIndex={"30"} bottom={"0px"} left={"0px"}  />
                )}
            </Flex>
        </Box>
    )
}

export default AuthLayout
