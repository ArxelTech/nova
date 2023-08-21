import { Box, Button, Flex, Text } from '@chakra-ui/react'
// import React from 'react' 

interface Props {}

function Navbar(props: Props) {
    const {} = props

    return (
        <Flex width="full" bg={"brand.black"} alignItems="center" justifyContent="space-between" pt="30px" pb="20px" px="32px" >
            <Flex gap="16px"> 
                <Box width="53px" height="53px" rounded="full" bg="brand.gray200" />
                <Box>
                    <Text color="brand.gray200" fontFamily="700" >You and 5 other friends are currently watching </Text>
                    <Text color="brand.gray200" fontFamily={"400"} >🍿 Peaky Blinders S1 E12 - On Netflix</Text>
                </Box>
            </Flex>
            <Flex gap="8px" >
                <Button color="white" px="14px" height="42px" fontSize="15px" fontFamily={"600"} border="1px" borderColor={"brand.primaryColor"} rounded="8px" bg={"brand.primaryColor"} >Invite A Friend</Button>
                <Button color="white" px="14px" height="42px" fontSize="15px" fontFamily={"600"} border="1px" borderColor="white" rounded="8px" bg="transparent" >Leave Party</Button>
            </Flex>
        </Flex>
    )
}

export default Navbar
