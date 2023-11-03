import { Box, Image, Text } from '@chakra-ui/react'
// import React from 'react'

interface Props {
    size?: any,
    fontsize?: any,
    data: any
}

function UserProfile(props: Props) {
    const {
        size,
        fontsize,
        data
    } = props    

    return ( 
        <>
            {data?.profilePic && 
                <Box w={size ? size : "48px"} h={size ? size : "48px"} rounded={"full"} bg={"brand.base"} > 
                    <Image width={"full"} height={"full"} rounded={"full"} objectFit={"cover"} src={data?.profilePic} />
                </Box>
            }
            {!data?.profilePic && 
                <Box w={size ? size : "48px"} h={size ? size : "48px"} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded={"full"} bg={"gray.400"} >  
                    <Text fontWeight={"bold"} fontSize={fontsize ? fontsize : "24px"} >{data?.firstName?.slice(0, 1)}</Text>
                    <Text fontWeight={"bold"} fontSize={fontsize ? fontsize : "24px"} >{data?.lastName?.slice(0, 1)}</Text>
                </Box>
            }
        </>
    )
}

export default UserProfile
