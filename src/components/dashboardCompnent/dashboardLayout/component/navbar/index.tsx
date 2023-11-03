import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useQuery } from 'react-query';
import axiosInstance from '../../../../../services/axiosInstance';
import UserProfile from '../../../../sharedcomponent/userprofile';
// import React from 'react'

interface Props {}

function Navbar(props: Props) {
    const {} = props


    let userId =  localStorage.getItem("userId")

    const { isLoading, data } = useQuery(['user'], () => axiosInstance.get('/user/'+userId))     

    return (
        <Flex w={"full"} bg={"brand.black"} position={"relative"} borderBottom={"1px"} alignItems={"center"} h={"100px"} pl={"35px"} pr={"24px"} justifyContent={"space-between"} >
            <Button  bg={"brand.black"}  >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H17M3 6H21M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Button>
            <Box position={"absolute"} inset={"0px"} display={"flex"} justifyContent={"center"} alignItems={"center"} > 
                <Image width={"90px"} src={"/images/logo.svg"} />
            </Box>
            {!isLoading && ( 
                <Flex alignItems={"center"} gap={"6px"} > 
                    <Box>
                        <Text textAlign={"right"} fontFamily={"700"} color={"brand.gray200"} >{data?.data?.data?.firstName} {data?.data?.data?.lastName}</Text>
                        <Text textAlign={"right"} fontFamily={"400"} color={"brand.gray300"} >{data?.data?.data?.email}</Text>
                    </Box>
                    <UserProfile data={data?.data?.data} /> 
                </Flex>
            )}
        </Flex>
    )
}

export default Navbar
