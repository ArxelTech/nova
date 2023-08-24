import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
// import React from 'react' 

interface Props {
    user: boolean
}

function Topbar(props: Props) {
    const {
        user
    } = props

    const navigate = useNavigate()

    return (
        <Flex width="full" bg={"brand.black"} alignItems="center" justifyContent="space-between" borderBottom={"1px"} h={"130px"} px="32px" >
            {!user && (
                <Flex gap="16px"> 
                    <Box width="53px" height="53px" rounded="full" bg="brand.gray200" />
                    <Box>
                        <Text color="brand.gray200" fontFamily="700" >You and 5 other friends are currently watching </Text>
                        <Text color="brand.gray200" fontFamily={"400"} >🍿 Peaky Blinders S1 E12 - On Netflix</Text>
                    </Box>
                </Flex>
            )}
            {user && (
                <Box>
                    <Text color="gray.400" fontSize={"14px"} fontFamily="400" >HI MICHAEL 👋</Text>
                    <Text color="brand.gray300" fontSize={"32px"} fontFamily={"700"} >Good Afternoon</Text>
                </Box>
            )}
            {!user && (
                <Flex gap="8px" >
                    <Button color="white" px="14px" height="42px" fontSize="14px" fontFamily={"600"} border="1px" borderColor={"brand.base"} rounded="8px" _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}} bg={"brand.base"} >Invite A Friend</Button>
                    <Button onClick={()=> navigate("/dashboard")} color="white" px="14px" height="42px" fontSize="14px" fontFamily={"600"} border="1px" borderColor="white" rounded="8px" _hover={{ backgroundColor: "transparent"}} _focus={{ backgroundColor: "transparent"}} bg="transparent" >Leave Party</Button>
                </Flex>
            )}
            {user && (
                <Flex gap="8px" >
                    <Button color="white" px="14px" height="42px" fontSize="14px" fontFamily={"600"} border="1px" borderColor={"brand.base"} rounded="8px" _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}} bg={"brand.base"} >Start A Watch Party</Button>
                    <Button onClick={()=> navigate("/join-party")} color="white" px="14px" height="42px" fontSize="14px" fontFamily={"600"} border="1px" borderColor="white" rounded="8px" _hover={{ backgroundColor: "transparent"}} _focus={{ backgroundColor: "transparent"}} bg="transparent" >Join A Watch Party</Button>
                </Flex>
            )}
        </Flex>
    )
}

export default Topbar
