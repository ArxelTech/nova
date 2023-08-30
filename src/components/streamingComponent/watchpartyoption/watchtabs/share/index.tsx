import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {}

function ShareTab(props: Props) {
    const {} = props

    const [tab, setTab] = React.useState(false)

    return (
        <Box width="full" bg="brand.secondarybg" display={"flex"} flexDirection={"column"} mt="20px" border="1px" rounded="10px" borderColor="#FFFFFF0D" color="white" py="15px" >
            <Flex alignItems={"center"} px={"10px"} borderBottom={"1px"} borderColor={"#FFFFFF0D"} justifyContent={"space-between"} >
                <Flex gap={"8px"} >
                    <Text as={"button"} onClick={()=> setTab(false)} fontFamily={"500"} fontSize={"sm"} pb={"3px"} borderBottom={"1px"} px={"10px"} mb={"-1px"} color={!tab ? "brand.primaryColor" : "brand.inactive"} borderColor={!tab ? "brand.primaryColor": "#FFFFFF0D"}>Link</Text>
                    <Text as={"button"} onClick={()=> setTab(true)}  fontFamily={"500"} fontSize={"sm"} pb={"3px"} borderBottom={"1px"} px={"10px"} mb={"-1px"}  color={tab ? "brand.primaryColor" : "brand.inactive"} borderColor={tab ? "brand.primaryColor": "#FFFFFF0D"} >Room ID</Text>
                </Flex>
            </Flex>
            <Box pt={"19px"} px={"22px"}  >
                <Text fontFamily={"500"} color={"brand.primaryColor"} fontSize={"sm"} >https://www.getnova.app/in/902829</Text>
            
                <Button height={"36px"} px="20px" mt={"10px"} w="fit-content" rounded="8px" _hover={{ backgroundColor: "transparent"}} _focus={{ backgroundColor: "transparent"}} border="1px" bg="transparent" fontSize={"14px"} color="white" variant='outline' >
                    Copy Link
                </Button>
            </Box>
        </Box>
    )
}

export default ShareTab
