import { Box, Button, Flex, Text } from '@chakra-ui/react'
// import React from 'react'

interface Props {
    max: any
}

function TalkTab(props: Props) {
    const {
        max
    } = props
    

    return (
        <Box width="full" h={"full"} bg="brand.secondarybg" display={"flex"} flexDirection={"column"} mt="20px" border="1px" rounded="10px" borderColor="#FFFFFF0D" color="white" py="15px" px="22px" >
            <Flex alignItems={"center"} justifyContent={"space-between"} >
                <Flex alignItems={"center"} gap={"7px"} >
                    <Box w="11px" h="11px" rounded={"full"} bg={"brand.online"} />
                    <Text fontFamily={"700"} color={"brand.gray300"} >Voice Chat is active</Text>
                </Flex>
                <Box as="button"  onClick={()=> max(true)}> 
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.25 2.25H15.75M15.75 2.25V6.75M15.75 2.25L10.5 7.5M6.75 15.75H2.25M2.25 15.75V11.25M2.25 15.75L7.5 10.5" stroke="white" stroke-width="1.58333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Box>
            </Flex>
            <Flex justifyContent={"space-around"} gap={"6px"} alignItems={"center"} py="10px" >
                <Box w={"46px"} h={"46px"} rounded={"full"} bg={"red.300"} />
                <Box w={"46px"} h={"46px"} rounded={"full"} bg={"red.300"} />
                <Box w={"46px"} h={"46px"} rounded={"full"} bg={"red.300"} />
                <Box w={"46px"} h={"46px"} rounded={"full"} bg={"red.300"} />
                <Box w={"46px"} h={"46px"} rounded={"full"} bg={"red.300"} /> 
            </Flex>
            <Button height={"36px"} px="20px" mt={"4px"} w="fit-content" rounded="8px" _hover={{ backgroundColor: "transparent"}} _focus={{ backgroundColor: "transparent"}} border="1px" bg="transparent" fontSize={"14px"} color="white" variant='outline' >
                Leave Conversation
            </Button>
        </Box>
    )
}

export default TalkTab
