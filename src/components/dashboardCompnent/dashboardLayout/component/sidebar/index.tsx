import { Box, Text, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import FriendTab from './friendtab'
// import React from 'react'

interface Props {}

function Sidebar(props: Props) {
    const {} = props

    const [tab, setTab] = React.useState(0)

    return (
        <Box w="full" height={"full"} display={"flex"} flexDirection={"column"}>
            <Box w="full" bg={"brand.black"} mt={"10px"}  px="28px"  >
                <Box p={"16px"} rounded={"8px"} bg={"brand.btnbg"} w={"full"} >
                    <Text fontFamily={"700"} color={"brand.gray200"} >Become A Premium User</Text>
                    <Text fontFamily={"400"} color={"brand.gray200"}>Text your friends on your phone while watching the movie by using companion mode</Text>

                    <Button display={"flex"} alignItems={"center"} gap={"8px"} mt={"8px"} color="white" px="14px" height="42px" fontSize="14px" fontFamily={"600"} border="1px" borderColor={"brand.base"} rounded="8px" _hover={{ backgroundColor: "brand.base"}} _focus={{ backgroundColor: "brand.base"}} bg={"brand.base"} >
                        Go Premium
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.83301 14.1666L14.1663 5.83325M14.1663 5.83325H5.83301M14.1663 5.83325V14.1666" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>
                </Box>
                <Box zIndex={"30"} position={"sticky"} top={"0px"} w={"full"} mt={"24px"} pt={"24px"} borderTop={"1px"} > 
                    <Flex justifyContent={"space-between"} >
                        <Text color={"brand.gray300"} fontFamily={"700"} fontSize={"18px"} >Friends (6)</Text>
                        <Button color="white" px="14px" height="42px" fontSize="14px" fontFamily={"600"} border="1px" borderColor="white" rounded="8px" _hover={{ backgroundColor: "transparent"}} _focus={{ backgroundColor: "transparent"}} bg="transparent" >Add Friends</Button>
                    </Flex>
                    <Box w="100%" bg="brand.tabcolor" mt={"24px"} rounded={"10px"} px={"7px"} py={"6px"} >
                        <Flex gap={"6px"} >
                            <Button onClick={()=> setTab(0)} _hover={{ backgroundColor: "brand.btnbg"}} _focus={{ backgroundColor: "brand.btnbg"}} h="50px" w="full" bg={tab === 0 ? "brand.btnbg" : ""} color={"brand.gray200"} rounded={"10px"} >
                                Added
                            </Button>
                            <Button onClick={()=> setTab(1)} _hover={{ backgroundColor: "brand.btnbg"}} _focus={{ backgroundColor: "brand.btnbg"}} h="50px" display="flex" alignItems="center" gap="4px" w="full" bg={tab === 1 ? "brand.btnbg" : ""} color={"brand.gray200"} rounded={"10px"} >
                                Pending
                            </Button>
                            <Button onClick={()=> setTab(2)} _hover={{ backgroundColor: "brand.btnbg"}} _focus={{ backgroundColor: "brand.btnbg"}} h="50px" display="flex" alignItems="center" gap="4px" w="full" bg={tab === 2 ? "brand.btnbg" : ""} color={"brand.gray200"} rounded={"10px"} >
                                Requests
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </Box>
            <Box w={"full"} h={"full"} px="28px" overflowY={"auto"} > 
                <FriendTab tab={tab} />
            </Box>
        </Box>
    )
}

export default Sidebar
